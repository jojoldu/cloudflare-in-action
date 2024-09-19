import { RSSItems } from './RSSItems';
import { RSSItem } from './RSSItem';

const encodeCredentials = (username: string, password: string): string => {
	const credentials = `${username}:${password}`;
	return `Basic ${btoa(credentials)}`;
};

const checkBasicAuth = (request: Request): boolean => {
	const authHeader = request.headers.get('Authorization');
	if (!authHeader) {
		return false;
	}

	const username = 'your-username';
	const password = 'your-password';
	const expectedAuthHeader = encodeCredentials(username, password);
	return authHeader === expectedAuthHeader;
};

export default {
	async fetch(request: Request): Promise<Response> {

		if (!checkBasicAuth(request)) {
			return new Response('Unauthorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="Protected Area"',
				},
			});
		}

		const rssItems = new RSSItems();
		rssItems.add(new RSSItem('Item 1', 'Description of Item 1', new Date(), '1'));
		rssItems.add(new RSSItem('Item 2', 'Description of Item 2', new Date(), '2'));

		const rssFeed = rssItems.generateRSSFeed();

		return new Response(rssFeed, {
			headers: { 'Content-Type': 'application/rss+xml' },
		});
	},
};
