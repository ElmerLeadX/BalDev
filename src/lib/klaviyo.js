const apikey = "TXu8VQ";
const url = "https://a.klaviyo.com/api";
export async function CreateProfiles(profiledata) {
	const datatosend = {
		data: {
			type: "profile",
			attributes: {
				email: profiledata.email,
				first_name: profiledata.name,
				last_name: profiledata.lastname,
				properties: {
					Réponse: profiledata.results,
					Quizoptions: profiledata.answers,
				},
			},
		},
	};
	const response = fetch(`${url}/profiles`, {
		method: "POST",
		headers: {
			accept: "application/json",
			revision: "2024-07-15",
			"content-type": "application/json",
			Authorization: `Klaviyo-API-Key ${apikey}`,
		},
		body: JSON.stringify(datatosend),
	});
	return (await response).json();
}

export async function getProfiles(data) {
  const email = encodeURIComponent(data.email);
  const response = fetch(`${url}/profiles/?filter=equals(email,"${email}")`, {
		method: 'GET',
    headers: {
      revision: '2024-07-15',
      accept: 'application/json',
      Authorization: `Klaviyo-API-Key ${apikey}`
    },
  });
  return (await response).json();
}

export async function AddtoList(id, list) {
  const response = fetch(`${url}/lists/${list}/relationships/profiles/`, {
		method: "POST",
		headers: {
			accept: "application/json",
			revision: "2024-07-15",
			"content-type": "application/json",
			Authorization: `Klaviyo-API-Key ${apikey}`,
		},

		body: JSON.stringify({
			data: [
				{
					type: "profile",
					id: id,
				},
			],
		}),
	});
  
  return (await response).json();
}

export async function removeFromList(id, list) {
  const response = fetch(`${url}/lists/${list}/relationships/profiles/`, {
		method: "DELETE",
		headers: {
			accept: "application/json",
			revision: "2024-07-15",
			"content-type": "application/json",
			Authorization: `Klaviyo-API-Key ${apikey}`,
		},
		body: JSON.stringify({
			data: [
				{
					type: "profile",
					id: id,
				},
			],
		}),
	});
  
  return (await response).json();
}

export async function UpdateProfile(id,data) {
  const datatosend = {
		data: {
			type: "profile",
			id: id,
			attributes: {
				properties: {
					Réponse: data.results,
					Quizoptions: data.answers,
				},
			},
		},
	};
  const response = fetch(`${url}/profiles/${id}/`, {
		method: "PATCH",
		headers: {
			accept: "application/json",
			revision: "2024-07-15",
			"content-type": "application/json",
			Authorization: `Klaviyo-API-Key ${apikey}`,
		},
		body: JSON.stringify(datatosend),
	});
  return (await response).json();
}

export async function subscribe(data,id,list) {
  const datatosend = {
		data: {
			type: "profile-subscription-bulk-create-job",
			attributes: {
				custom_source: "Marketing Event",
				profiles: {
					data: [
						{
							type: "profile",
							id: id,
							attributes: {
								email: data.email,
							},
							subscription: {
								email: {
									marketing: {
										consent: "SUBSCRIBED",
										consented_at: "2024-11-12T20:39:58.645Z",
									},
								},
							},
						},
					],
					historical_import: true,
				},
			},
			relationships: {
				list: {
					data: {
						type: "list",
						id: list,
					},
				},
			},
		},
	};
  const response = fetch(`${url}/profile-subscription-bulk-create-jobs`, {
		method: "POST",
		headers: {
			accept: "application/vnd.api+json",
			revision: "2024-07-15",
			"content-type": "application/vnd.api+json",
			Authorization: `Klaviyo-API-Key ${apikey}`,
		},
		body: JSON.stringify(datatosend),
	});
  return (await response).json();
}