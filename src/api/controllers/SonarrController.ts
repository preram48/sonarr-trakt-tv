import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import * as express from "express";
import { TraktTVService, SonarrService, SyncRunnerService } from '../services';

@controller("/api/sonarr")
@injectable()
export class SonarrController implements interfaces.Controller {
    constructor( @inject("SonarrService") private sonarrService: SonarrService) { }

    @httpGet("/paths")
    private async paths(): Promise<any> {
        let paths = await this.sonarrService.findPaths();
        return paths;
    }

    @httpGet("/profiles")
    private async profiles(): Promise<any> {
        let paths = await this.sonarrService.findProfiles();
        return paths;
    }
}
