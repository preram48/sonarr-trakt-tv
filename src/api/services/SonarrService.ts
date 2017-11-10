import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import { SonarrRepository } from '../repositories';

@injectable()
export class SonarrService {

    constructor( @inject("SonarrRepository") private sonarrRepository: SonarrRepository) { }

    public async upsetSeasons(series: Array<any>, settings) {
        let listOfSeries = new Array<any>();
        series.forEach(element => {
            let elementInList = listOfSeries.find(s => s.tvdbId === element.tvdbId);
            if (elementInList) {
                elementInList.seasons.push({ seasonNumber: element.seasonNumber, monitored: true });
            } else {
                listOfSeries.push({
                    tvdbId: element.tvdbId,
                    title: element.title,
                    titleSlug: element.titleSlug,
                    monitored: true,
                    seasonFolder: true,
                    qualityProfileId: settings.profile,
                    seasons: [{
                        seasonNumber: element.seasonNumber,
                        monitored: true
                    }],
                    path: `${settings.folder}${element.title}`
                });
            }
        });

        let currentSeries = await this.sonarrRepository.findAllSeries();
        listOfSeries = listOfSeries.map(element => {
            let showInSonarr = currentSeries.find(series => series.tvdbId === element.tvdbId);

            if (showInSonarr) {
                element.seasons = showInSonarr.seasons.map(s => {
                    let seasons = element.seasons.find(x => x.seasonNumber === s.seasonNumber);
                    return {
                        seasonNumber: s.seasonNumber,
                        monitored: !!seasons
                    }
                });
                return Object.assign(showInSonarr, element);
            } else {
                return element;
            }
        });

        for (let series of listOfSeries) {
            if (!series.id) {
                let results = await this.sonarrRepository.searchSeries(series.title);
                if (results && results.length > 0) {
                    let searchResult = results.find(s => s.tvdbId === series.tvdbId);
                    for (let season of searchResult.seasons) {
                        let doesSeasonExist = series.seasons.find(x => x.seasonNumber === season.seasonNumber);
                        if (!doesSeasonExist) {
                            season.monitored = false;
                            series.seasons.push(season);
                        }
                    }
                }
            }
        }

        for (let series of listOfSeries) {
            if (series.id) {
                await this.updateSeasons(series);
            } else {
                await this.createSeasons(series);
            }
        }

    }

    public async updateSeasons(show) {

        try {
            await this.sonarrRepository.updateSeries(show);
        } catch (error) {
            console.log(`Failed to add ${show.title}: ${JSON.stringify(error)}`);
        }

        return show;
    }

    public async createSeasons(show) {

        try {
            await this.sonarrRepository.createSeries(show);
        } catch (error) {
            console.log(`Failed to add ${show.title}: ${JSON.stringify(error)}`);
        }

        return show;
    }

    public async upsetShows(series: Array<any>, settings) {
        let currentShows = await this.sonarrRepository.findAllSeries();
        let showsToAdd = new Array<any>();

        for (let show of series) {
            let showInSonarr = currentShows.find(series => series.tvdbId === show.ids.tvdb);
            if (!showInSonarr) {
                let results = await this.sonarrRepository.searchSeries(show.title);
                if (results && results.length > 0) {
                    let firstShow = results.find(s => s.tvdbId === show.ids.tvdb);
                    await this.createSeasons(Object.assign(firstShow, {
                        qualityProfileId: settings.profile,
                        path: `${settings.folder}${firstShow.title}`
                    }));
                }
            }
        }
    }

    public async findPaths() {
        return await this.sonarrRepository.findPaths();
    }

    public async findProfiles(): Promise<Array<any>> {
        return await this.sonarrRepository.findProfiles();
    }
}
