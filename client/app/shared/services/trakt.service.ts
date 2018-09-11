import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TraktService {
  constructor(
    private http: Http
  ) { }

  fetchWatchlist(username: string) {
    return this.http.get(`/api/trakt/watchlist?username=${username}`);
  }

  fetchPopularShows(years: string = '', ratings: string = '0-100', limit: number = 100) {
    return this.http.get(`/api/trakt/popular?years=${years}&ratings=${ratings}&limit=${limit}`);
  }

  fetchTrendingShows(years: string = '', ratings: string = '0-100', limit: number = 100) {
    return this.http.get(`/api/trakt/trending?years=${years}&ratings=${ratings}&limit=${limit}`);
  }

  fetchCustomListShows(username: string, listName: string, years: string = '', ratings: string = '0-100', limit: number = 100) {
    return this.http.get(`/api/trakt/custom?username=${username}&listName=${listName}&years=${years}&ratings=${ratings}&limit=${limit}`);
  }
}
