import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import * as express from "express";
import { TraktTVService } from '../services';

@controller("/api/trakt")
@injectable()
export class TraktTVController implements interfaces.Controller {
    constructor( @inject("TraktTVService") private traktTVService: TraktTVService) { }

    @httpGet("/")
    private async findAll(@queryParam("username") username: string = ''): Promise<any> {
        let watchlist = await this.traktTVService.findWatchlistByUsername(username);
        return watchlist;
    }
}
