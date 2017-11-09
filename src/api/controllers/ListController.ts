import { interfaces, controller, httpGet, httpPost, httpPut, httpDelete, request, queryParam, response, requestBody, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import * as express from "express";
import { ListService } from '../services';

@controller("/api/list")
@injectable()
export class ListController implements interfaces.Controller {
    constructor( @inject("ListService") private listService: ListService) { }

    @httpGet("/")
    private async list(): Promise<any> {
        return this.listService.findAll();
    }

    @httpPost('/')
    public async create( @response() res: Response, @requestBody() body: any): Promise<any> {
        await this.listService.create(body);
        return {};
    }

    @httpDelete('/:id')
    public async destroy( @response() res: Response, @requestParam('id') id: string): Promise<any> {
        await this.listService.delete(id);
        return {};
    }

    @httpPut('/:id')
    public async update( @response() res: Response, @requestParam('id') id: string, @requestBody() body: any): Promise<any> {
        await this.listService.update(id, body);
        return {};
    }
}
