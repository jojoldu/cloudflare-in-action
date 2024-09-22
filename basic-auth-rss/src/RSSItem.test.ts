import {describe, expect, it} from "vitest";
import {RSSItem} from './RSSItem';

describe('RSSItem', () => {
    it('should create RSSItem', () => {
        const title = 'title';
        const description = 'description';
        const guid = 'guid';
        const pubDate = new Date();
        const item = new RSSItem(title, description, pubDate, guid);

        expect(item.toXML().trim()).toBe(
            `<item>
        <title>${title}</title>
        <description>${description}</description>
        <pubDate>${pubDate.toUTCString()}</pubDate>
        <guid>${guid}</guid>
      </item>`.trim());
    });

});
