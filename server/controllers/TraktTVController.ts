import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import * as express from "express";
import { TraktTVService } from '../services';

@controller("/api/trakt")
@injectable()
export class TraktTVController implements interfaces.Controller {
    constructor( @inject("TraktTVService") private traktTVService: TraktTVService) { }

    @httpGet("/watchlist")
    private async watchlist( @queryParam("username") username: string = ''): Promise<any> {
        let watchlist = await this.traktTVService.findWatchlistByUsername(username);
        return watchlist;
    }

    @httpGet("/trending")
    private async trending( @queryParam("years") years: string = '', @queryParam("ratings") ratings: string = '0-100', @queryParam("limit") limit: number = 100): Promise<any> {
        let watchlist = await this.traktTVService.findTrendingShows(years, ratings, limit);
        return watchlist;
    }

    @httpGet("/popular")
    private async popular( @queryParam("years") years: string = '', @queryParam("ratings") ratings: string = '0-100', @queryParam("limit") limit: number = 100): Promise<any> {
        let watchlist = await this.traktTVService.findPopularShows(years, ratings, limit);
        return watchlist;
    }

    @httpGet("/custom")
    private async custom( @queryParam("username") username: string, @queryParam("listName") listName: string, @queryParam("years") years: string = '', @queryParam("ratings") ratings: string = '0-100', @queryParam("limit") limit: number = 100): Promise<any> {
        let watchlist = await this.traktTVService.findCustomListShows(username, listName, years, ratings, limit);
        return watchlist;
    }
}
