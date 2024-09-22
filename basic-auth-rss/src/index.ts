import {getRSSFeed} from './getRSSFeed';

interface Env {
	USERNAME: string
	PASSWORD: string
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const authHeader = request.headers.get("Authorization");
		const expectedAuthHeader = encodeCredentials(env.USERNAME, env.PASSWORD);

		try {
			validateAuth(authHeader, expectedAuthHeader);
		} catch (e) {
			console.log(e);
			return new Response('Unauthorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="Protected Area"',
				},
			});
		}

		return new Response(getRSSFeed(), {
			headers: { 'Content-Type': 'text/xml;charset=UTF-8' },
		});
	},
};

function encodeCredentials(username: string, password: string): string {
	console.log(`username: ${username}, password: ${password}`);
	const credentials = `${username}:${password}`;
	return `Basic ${btoa(credentials)}`;
}

function validateAuth(authHeader: string | null, expectedAuthHeader: string): void {
	if (!authHeader) {
		throw new Error("Authorization header is required");
	}

	if(authHeader !== expectedAuthHeader) {
		throw new Error("Invalid credentials");
	}
}
