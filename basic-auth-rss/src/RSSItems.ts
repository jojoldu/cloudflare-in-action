import { RSSItem } from './RSSItem';

export class RSSItems {
    private items: RSSItem[];

    constructor() {
        this.items = [];
    }

    public add(item: RSSItem): void {
        this.items.push(item);
    }

    public toXML(): string {
        return this.items.map(item => item.toXML()).join('');
    }

    public generateRSSFeed(): string {
        return `
      <rss version="2.0">
        <channel>
          <title>Protected RSS Feed</title>
          <description>This is a protected RSS feed</description>
          <link>https://your-worker-url.workers.dev</link>
          <language>en</language>
          ${this.toXML()}
        </channel>
      </rss>
    `;
    }
}
