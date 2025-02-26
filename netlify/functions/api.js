// YOUR_BASE_DIRECTORY/netlify/functions/api.js

import express, { Router } from "express";
import serverless from "serverless-http";
import cors from "cors";
import fetch from "node-fetch";
import 'dotenv/config';
const url = process.env.VITE_KLAVIYO_API_URL;
const apiKey = process.env.VITE_KLAVIYO_API_KEY;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const api = express();
api.use(cors(corsOptions));

api.use(express.json());

const router = Router();
router.post("/getprofiles", (req, res) => {
  const email = req.body.email
  fetch(`${url}/profiles/?filter=equals(email,"${email}")`, {
    method: 'GET',
    headers: {
      revision: '2024-07-15',
      accept: 'application/json',
      Authorization: `Klaviyo-API-Key ${apiKey}`
    }
  })
  .then(res => res.json())
  .then(json => res.status(200).send(JSON.stringify(json)))
  .catch(err => {
    res.status(500).send({ error: err })
  });
});

router.post("/createprofiles", (req, res) => {
  const profiledata = req.body.data
  const datatosend = {
    data: {
      type: "profile",
      attributes: {
        email: profiledata.email,
        first_name: profiledata.name,
        last_name: profiledata.lastname,
        properties: {
          "Réponse": profiledata.results,
          "Quizoptions": profiledata.answersfr
        }
      }
    }
  }
  fetch(`${url}/profiles`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-07-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${apiKey}`
    },
    body: JSON.stringify(datatosend)
  }).then(res => res.json())
  //json.data.id
  .then(json => res.status(200).send({ id: json.data.id}))
  .catch(err => {
    res.status(500).send({ error: err })
  });
});

router.post("/addtolist", (req, res) => {
  const idrequest = req.body.id
  const idList = req.body.list
  fetch(`${url}/lists/${idList}/relationships/profiles/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-07-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${apiKey}`
    },
    body: JSON.stringify({
      data: [{
        type: "profile",
        id: idrequest
      }]
    })
  })
  .then(res => res.json())
  .then(json => res.status(200).send(JSON.stringify({'data':json})))
  .catch(err => {
    res.status(500).send({ error: err })
  });
});

router.post("/removelist", (req, res) => {
  const idrequest = req.body.id
  const idList = req.body.list
  fetch(`${url}/lists/${idList}/relationships/profiles/`, {
		method: "DELETE",
		headers: {
			accept: "application/json",
			revision: "2024-07-15",
			"content-type": "application/json",
			Authorization: `Klaviyo-API-Key ${apiKey}`,
		},
		body: JSON.stringify({
			data: [
				{
					type: "profile",
					id: idrequest,
				},
			],
		}),
	})
		.then((res) => res.json())
		.then((json) => res.status(200).send(JSON.stringify({ data: json })))
		.catch((err) => {
			res.status(500).send({ error: err });
		});
});

router.post("/updateprofile", (req, res) => {
  const profiledata = req.body.data
  var answers = profiledata.answersfr
  if(profiledata.answersfr.length === 0){
    answers = profiledata.answers;
  }
  const idrequest = req.body.id
  const datatosend = {
		data: {
			type: "profile",
			id: idrequest,
			attributes: {
				properties: {
					Réponse: profiledata.results,
					Quizoptions: answers,
				},
			},
		},
	};
  fetch(`${url}/profiles/${idrequest}/`, {
    method: 'PATCH',
    headers: {
      accept: 'application/json',
      revision: '2024-07-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${apiKey}`
    },
    body: JSON.stringify(datatosend)
  })
  .then(res => res.json())
  .then(json => res.status(200).send({data:json.data}))
  .catch(err => {
    res.status(500).send({ error: err })
  });
});

router.post("/subscribe", (req, res) => {
  const profiledata = req.body.data
  const idrequest = req.body.id
  const idList = req.body.list
  const datatosend = {
      "data":{
        "type":"profile-subscription-bulk-create-job",
        "attributes":{
          "custom_source":"Marketing Event",
          "profiles":
          {
            "data":[
              {
                "type":"profile",
                "id":idrequest,
                "attributes":{
                  "email":profiledata.email,
                },
                "subscription":{
                  "email":{
                    "marketing":{
                      "consent":"SUBSCRIBED",
                      "consented_at": "2024-11-12T20:39:58.645Z"
                    }
                  }
                }
              }
            ],
            "historical_import":true
          }
        },
        "relationships":{
          "list":{
            "data":{
              "type":"list",
              "id":idList
            }
          }
      }
    }
  }
  fetch(`${url}/profile-subscription-bulk-create-jobs`, {
		method: "POST",
		headers: {
			accept: "application/vnd.api+json",
			revision: "2024-07-15",
			"content-type": "application/vnd.api+json",
			Authorization: `Klaviyo-API-Key ${apiKey}`,
		},
    body: JSON.stringify(datatosend)
	})
  .then(res => res.json())
  .then(json => res.status(200).send({data:json.data}))
  .catch(err => {
    res.status(500).send({ error: err })
  });
});

api.use("/api/", router);

export const handler = serverless(api);