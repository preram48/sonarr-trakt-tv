import { interfaces, controller, httpGet, httpPost, httpDelete, httpPut, request, requestBody, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import * as express from "express";
import { SettingsService, SyncRunnerService } from '../services';

@controller("/api/settings")
@injectable()
export class SettingsController implements interfaces.Controller {
    constructor( @inject("SettingsService") private settingsService: SettingsService, 
    @inject("SyncRunnerService") private syncRunnerService: SyncRunnerService) {
        this.syncRunnerService.setupSyncList();
     }

    @httpGet("/")
    private async list( @queryParam("username") username: string = ''): Promise<any> {
        return this.settingsService.findAll();
    }

    @httpPost('/')
    public async create( @response() res: Response, @requestBody() body: any): Promise<any> {
        await this.settingsService.create(body);
        this.syncRunnerService.setupSyncList();
        return {};
    }

    @httpDelete('/:id')
    public async destroy( @response() res: Response, @requestParam('id') id: string): Promise<any> {
        await this.settingsService.delete(id);
        return {};
    }

    @httpPut('/:id')
    public async update( @response() res: Response, @requestParam('id') id: string, @requestBody() body: any): Promise<any> {
        await this.settingsService.update(id, body);
        this.syncRunnerService.setupSyncList();
        return {};
    }
}
