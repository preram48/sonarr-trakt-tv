import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";

import { ListService, TraktTVService, SonarrService, SettingsService } from '../services';
import { setInterval } from "timers";

@injectable()
export class SyncRunnerService {
    private intervalId: NodeJS.Timer;

    constructor( @inject("ListService") private listService: ListService,
        @inject("TraktTVService") private traktTVService: TraktTVService,
        @inject("SonarrService") private sonarrService: SonarrService,
        @inject("SettingsService") private settingsService: SettingsService) {
    }

    async setupSyncList() {
        let settings = this.settingsService.findAll();

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        if (settings.interval && settings.apiKey) {
            this.intervalId = setInterval(() => this.syncList(), settings.interval * 60000)
        }
    }

    async syncList() {
        let list = await this.listService.findAll();

        if (list && list.length > 0) {
            for (let item of list) {
                if (item.enabled) {
                    let seasons = await this.traktTVService.findWatchlistSeasonsByUsername(item.username);
                    this.sonarrService.upsetSeasons(seasons, item);
                    
                    let shows = await this.traktTVService.findWatchlistShowsByUsername(item.username);
                    this.sonarrService.upsetShows(shows, item);
                }
            }
        }
    }

}
