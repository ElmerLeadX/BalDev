export async function CreateProfiles(data) {
	const response = fetch("/api/createprofiles", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ data: data }),
	});

	return (await response).json();
	/* fetch(`${apiURL}/profiles`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Klaviyo-API-Key " + apiKey
    },
    body: JSON.stringify({
      "profile": {
        "email": data.email,
        "first_name": data.name,
        "last_name": data.lastname
      }
    })
  }).then(res => console.log(res.json()))
  .catch(err => console.log(err)) */
}

export async function getProfiles(data) {
	const response = fetch("/api/getprofiles", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ email: encodeURIComponent(data.email) }),
	});
	return (await response).json();
}

export async function AddtoList(id, list) {
	const response = fetch("/api/addtolist", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ id: id, list: list }),
	});

	return (await response).json();
}

export async function removeFromList(id, list) {
	const response = fetch("/api/removelist", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ id: id, list: list }),
	});

	return (await response).json();
}

export async function UpdateProfile(id, data) {
	const response = fetch("/api/updateprofile", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ data: data, id: id }),
	});
	return (await response).json();
}

export async function subscribe(data, id, list) {
	const response = fetch("/api/subscribe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ data: data, id: id, list: list }),
	});
	return (await response).json();
}
