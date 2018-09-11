import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import requestify = require("requestify");
import JsonDB = require('node-json-db');
import uuidV1 = require('uuid/v1');


@injectable()
export class DBRepository {
    private db: any;

    constructor() {
        this.db = new JsonDB("db", true, false);
    }

    create(item) {
        this.db.push(`/list/${uuidV1()}`, item);
    }

    delete(id: string) {
        this.db.delete(`/list/${id}`);
    }

    update(id: string, item: any) {
        this.db.push(`/list/${id}`, item);
    }

    findAll() {
        let dbResults = this.db.getData("/list");

        return Object.keys(dbResults).map(key => {
            let obj = dbResults[key];
            obj.id = key;
            return obj;
        });
    }
}
