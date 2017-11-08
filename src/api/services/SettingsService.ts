import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import { SettingsDBRepository } from '../repositories';

@injectable()
export class SettingsService {

    constructor( @inject("SettingsDBRepository") private settingsDBRepository: SettingsDBRepository) { }

    create(item) {
        this.settingsDBRepository.create(item);
    }

    delete(id: string) {
        this.settingsDBRepository.delete(id);
    }

    update(id: string, item: any) {
        this.settingsDBRepository.update(id, item);
    }

    findAll() {
        return this.settingsDBRepository.findAll();
    }
}
