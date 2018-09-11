import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import requestify = require("requestify");

import { SettingsDBRepository } from "./index";

@injectable()
export class SonarrRepository {

    constructor( @inject("SettingsDBRepository") private settingsDBRepository: SettingsDBRepository) { }

    public async createSeries(series) {
        let settings = await this.settingsDBRepository.findAll();
        let response = await requestify.post(`http://${settings.hostname}:${settings.port}/api/series?apikey=${settings.apiKey}`, series);
        return response.getBody();
    }

    public async updateSeries(series) {
        let settings = await this.settingsDBRepository.findAll();
        let response = await requestify.put(`http://${settings.hostname}:${settings.port}/api/series/${series.id}?apikey=${settings.apiKey}`, series)
        return response.getBody();
    }

    public async findAllSeries() {
        let settings = await this.settingsDBRepository.findAll();
        let response = await requestify.get(`http://${settings.hostname}:${settings.port}/api/series?apikey=${settings.apiKey}`);
        return response.getBody();
    }

    public async searchSeries(series) {
        let settings = await this.settingsDBRepository.findAll();
        let response = await requestify.get(`http://${settings.hostname}:${settings.port}/api/series/lookup?apikey=${settings.apiKey}&term=${series}`);
        return response.getBody();
    }

    public async findPaths() {
        let settings = await this.settingsDBRepository.findAll();
        let response = await requestify.get(`http://${settings.hostname}:${settings.port}/api/rootfolder?apikey=${settings.apiKey}`)
        return response.getBody();
    }

    public async findProfiles() {
        let settings = await this.settingsDBRepository.findAll();
        let response = await requestify.get(`http://${settings.hostname}:${settings.port}/api/profile?apikey=${settings.apiKey}`);
        return response.getBody();
    }
}
