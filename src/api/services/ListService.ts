import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import { DBRepository } from '../repositories';

@injectable()
export class ListService {

    constructor( @inject("DBRepository") private dbRepository: DBRepository) { }

    create(item) {
        this.dbRepository.create(item);
    }

    delete(id: string) {
        this.dbRepository.delete(id);
    }

    update(id: string, item: any) {
        this.dbRepository.update(id, item);
    }

    findAll() {
        return this.dbRepository.findAll();
    }
}
