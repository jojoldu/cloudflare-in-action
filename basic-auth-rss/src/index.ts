import { RSSItems } from './RSSItems';
import { RSSItem } from './RSSItem';

function encodeCredentials(username: string, password: string): string {
	const credentials = `${username}:${password}`;
	return `Basic ${btoa(credentials)}`;
}

function validateAuth(authHeader: string | null, username: string, password: string): void {
	if (!authHeader) {
		throw new Error("Authorization header is required");
	}

	const expectedAuthHeader = encodeCredentials(username, password);

	if(authHeader !== expectedAuthHeader) {
		throw new Error("Invalid credentials");
	}
}


function getRSSFeed(): string {
	const rssItems = new RSSItems();
	rssItems.add(new RSSItem('Item 1', 'Description of Item 1', new Date(), '1'));
	rssItems.add(new RSSItem('Item 2', 'Description of Item 2', new Date(), '2'));
	return rssItems.generateRSSFeed();
}

export default {
	async fetch(request: Request): Promise<Response> {
		const authHeader = request.headers.get("Authorization");
		const username = "your-username";
		const password = "your-password";

		try {
			validateAuth(authHeader, username, password);
		} catch (e) {
			return new Response('Unauthorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="Protected Area"',
				},
			});
		}

		return new Response(getRSSFeed(), {
			headers: { 'Content-Type': 'application/rss+xml' },
		});
	},
};
