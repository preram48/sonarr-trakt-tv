
import { injectable, inject } from 'inversify';
import { plainToClass } from "class-transformer";

import { TraktTVRepository } from '../repositories';

@injectable()
export class TraktTVService {

    constructor( @inject("TraktTVRepository") private traktTVRepository: TraktTVRepository) { }

    public async findWatchlistSeasonsByUsername(username): Promise<any> {
        let watchlist = await this.traktTVRepository.findWatchlistSeasonsByUsername(username);

        let seasons = watchlist.map(s => {
            return { seasonNumber: s.season.number, tvdbId: s.show.ids.tvdb, title: s.show.title, titleSlug: s.show.ids.slug }
        });

        return seasons;
    }

    public async findWatchlistShowsByUsername(username): Promise<any> {
        let shows = await this.traktTVRepository.findWatchlistShowsByUsername(username);
        return shows.map(s => s.show);
    }

    public async findWatchlistByUsername(username): Promise<any> {
        let shows = await this.traktTVRepository.findWatchlistByUsername(username);
        return shows;
    }

    public async findTrendingShows(years: string = '', ratings: string = '0-100', limit: number = 100): Promise<any> {
        let shows = await this.traktTVRepository.findTrendingShows(years, ratings, limit);
        return shows.map(s => s.show);
    }

    public async findPopularShows(years: string = '', ratings: string = '0-100', limit: number = 100): Promise<any> {
        let shows = await this.traktTVRepository.findPopularShows(years, ratings, limit);
        return shows;
    }
    public async findCustomListShows(username: string, listName: string, years: string = '', ratings: string = '0-100', limit: number = 100): Promise<any> {
        let shows = await this.traktTVRepository.findCustomListShows(username, listName, years, ratings, limit);
        return shows.map(s => s.show);
    }     
}
