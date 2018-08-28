import { injectable, inject } from "inversify";
import { plainToClass } from "class-transformer";
import { setInterval } from "timers";

import { ListService, TraktTVService, SonarrService, SettingsService } from '../services';
import { ListTypesEnum } from "../enums";

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
                if (item.enabled && item.listType === ListTypesEnum.Watchlist) {
                    let seasons = await this.traktTVService.findWatchlistSeasonsByUsername(item.username);
                    this.sonarrService.upsertSeasons(seasons, item);

                    let shows = await this.traktTVService.findWatchlistShowsByUsername(item.username);
                    await this.sonarrService.upsetShows(shows, item);

                } else if (item.enabled && item.listType === ListTypesEnum.Popular) {
                    let shows = await this.traktTVService.findPopularShows(item.years, item.ratings, item.limit);
                    await this.sonarrService.upsetShows(shows, item);

                } else if (item.enabled && item.listType === ListTypesEnum.Popular) {
                    let shows = await this.traktTVService.findTrendingShows(item.years, item.ratings, item.limit);
                    await this.sonarrService.upsetShows(shows, item);

                }  else if (item.enabled && item.listType === ListTypesEnum.Custom) {
                    let shows = await this.traktTVService.findCustomListShows(item.username, item.listName, item.years, item.ratings, item.limit);
                    await this.sonarrService.upsetShows(shows, item);
                }
            }
        }
    }

}
