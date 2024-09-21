import {RSSItems} from './RSSItems';
import {RSSItem} from './RSSItem';

export function getRSSFeed(): string {
    const rssItems = new RSSItems();
    rssItems.add(new RSSItem('Item 1', 'Description of Item 1', new Date(), '1'));
    rssItems.add(new RSSItem('Item 2', 'Description of Item 2', new Date(), '2'));
    return rssItems.generateRSSFeed();
}
