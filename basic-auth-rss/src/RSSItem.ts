export class RSSItem {
    private readonly _title: string;
    private readonly _description: string;
    private readonly _pubDate: Date;
    private readonly _guid: string;

    constructor(title: string, description: string, pubDate: Date | string, guid: string) {
        this._title = title;
        this._description = description;
        this._pubDate = typeof pubDate === 'string' ? new Date(pubDate) : pubDate;
        this._guid = guid;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get pubDate(): String {
        return this._pubDate.toUTCString();
    }

    get guid(): string {
        return this._guid;
    }

// XML 형식으로 변환
    public toXML(): string {
        return `
      <item>
        <title>${this.title}</title>
        <description>${this.description}</description>
        <pubDate>${this.pubDate}</pubDate>
        <guid>${this.guid}</guid>
      </item>
    `;
    }
}
