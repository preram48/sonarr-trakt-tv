import { interfaces, controller, httpGet, httpPost, httpDelete, httpPut, requestBody, queryParam, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { SettingsService, SyncRunnerService } from '../services';

@controller("/api/settings")
@injectable()
export class SettingsController implements interfaces.Controller {
    constructor( @inject("SettingsService") private settingsService: SettingsService, 
    @inject("SyncRunnerService") private syncRunnerService: SyncRunnerService) {
        this.syncRunnerService.setupSyncList();
     }

    @httpGet("/")
    private async list(@queryParam("username") username: string = ''): Promise<any> {
        return this.settingsService.findAll();
    }

    @httpPost('/')
    public async create(@requestBody() body: any): Promise<any> {
        await this.settingsService.create(body);
        this.syncRunnerService.setupSyncList();
        return {};
    }

    @httpDelete('/:id')
    public async destroy(@requestParam('id') id: string): Promise<any> {
        await this.settingsService.delete(id);
        return {};
    }

    @httpPut('/:id')
    public async update(@requestParam('id') id: string, @requestBody() body: any): Promise<any> {
        console.log(body);
        await this.settingsService.update(id, body);
        this.syncRunnerService.setupSyncList();
        return {};
    }
}
