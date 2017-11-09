
import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";

import Trakt = require('trakt.tv');

@injectable()
export class TraktTVRepository {
    private client: any;
    private traktAuthUrl: string;

    constructor() {
        this.createClientConnection();
    }

    private createClientConnection() {
        this.client = new Trakt({
            client_id: '2681e838763bda88cb265155ae4ffb6732dc55dc0c79d592ea0bbf8cf3f4daf2',
            client_secret: '8aeed2484d5fcb2101ff5c12a0fceae7cf610b95b5db58dd6c510999a57b4b53',
            redirect_uri: null,   // defaults to 'urn:ietf:wg:oauth:2.0:oob'
            api_url: null,        // defaults to 'https://api.trakt.tv'
            useragent: null,      // defaults to 'trakt.tv/<version>'
            pagination: false      // defaults to false, global pagination (see below)
        });

        this.traktAuthUrl = this.client.get_url();
    }

    public async findWatchlistSeasonsByUsername(username): Promise<any> {
        let watchlist = await this.client.users.watchlist({
            username: username,
            type: 'seasons'
        });

       return watchlist;
    }

    public async findWatchlistShowsByUsername(username): Promise<any> {
        let watchlist = await this.client.users.watchlist({
            username: username,
            type: 'shows'
        });

       return watchlist;
    }

    public async findWatchlistByUsername(username): Promise<any> {
        let watchlist = await this.client.users.watchlist({
            username: username
        });

       return watchlist;
    }
}
