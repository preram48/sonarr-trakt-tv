import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete, response, requestBody, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { ListService } from '../services';

@controller("/api/list")
@injectable()
export class ListController implements interfaces.Controller {
    constructor(@inject("ListService") private listService: ListService) { }

    @httpGet("/")
    private async list(): Promise<any> {
        return this.listService.findAll();
    }

    @httpPost('/')
    public async create(@requestBody() body: any): Promise<any> {
        await this.listService.create(body);
        return {};
    }

    @httpDelete('/:id')
    public async destroy(@requestParam('id') id: string): Promise<any> {
        await this.listService.delete(id);
        return {};
    }

    @httpPut('/:id')
    public async update(@requestParam('id') id: string, @requestBody() body: any): Promise<any> {
        await this.listService.update(id, body);
        return {};
    }
}
