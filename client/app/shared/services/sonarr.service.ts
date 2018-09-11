import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class SonarrService {

  constructor(
    private http: Http
  ) { }

  fetchPaths() {
    return this.http.get(`/api/sonarr/paths`)
    .map((res:Response) => res.json());
  }

  fetchProfiles() {
    return this.http.get(`/api/sonarr/profiles`)
    .map((res:Response) => res.json());
  }
}