import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import requestify = require("requestify");
import JsonDB = require('node-json-db');
import uuidV1 = require('uuid/v1');


@injectable()
export class SettingsDBRepository {
    private db: any;

    constructor() {
        this.db = new JsonDB("db", true, false);
    }

    create(item) {
        this.db.push(`/settings/${uuidV1()}`, item);
    }

    delete(id: string) {
        this.db.delete(`/settings/${id}`);
    }

    update(id: string, item: any) {
        this.db.push(`/settings/${id}`, item);
    }

    findAll() {
        
        try {
            let dbResults = this.db.getData("/settings");

            return Object.keys(dbResults).map(key => {
                let obj = dbResults[key];
                obj.id = key;
                return obj;
            })[0];
        } catch (error) {
            console.log(error);
        }

        return {};
    }
}
