import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class SettingsService {

  constructor(
    private http: Http
  ) { }

  fetchSettings() {
    return this.http.get(`/api/settings`)
    .map((res:Response) => res.json());
  }

  updateSettings(id, body) {
    return this.http.put(`/api/settings/${id}`, body)
    .map((res:Response) => res.json());
  }

  createSettings(body) {
    return this.http.post(`/api/settings`, body)
    .map((res:Response) => res.json());
  }
}
