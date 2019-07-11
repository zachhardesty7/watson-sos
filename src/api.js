import { secrets } from './secrets'

const encodeURL = obj => Object.entries(obj).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')

export const getNewToken = () => {
	const data = {
		client_id: secrets.API_CLIENT_ID,
		client_secret: secrets.API_CLIENT_SECRET,
		grant_type: 'client_credentials',
		json: true,
		scope: 'openid',
	}
	const options = {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		method: 'POST',
		body: encodeURL(data),
	}

	return fetch(`https://${secrets.TENANT_URL}/v1.0/endpoint/default/token`, options)
		.then(res => res.json())
}

let user = null

export const login = (username, password) => {
	if (username === secrets.USERNAME && password === secrets.PASSWORD) {
		user = {
			username: secrets.USERNAME,
			password: secrets.PASSWORD,
		}
		return user
	}

	return false
}

export const getUser = () => (user || false)
