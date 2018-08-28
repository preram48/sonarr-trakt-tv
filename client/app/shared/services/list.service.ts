import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ListService {

  constructor(
    private http: Http
  ) { }

  fetchList() {
    return this.http.get(`/api/list`)
    .map((res:Response) => res.json());
  }

  updateList(id, body) {
    return this.http.put(`/api/list/${id}`, body)
    .map((res:Response) => res.json());
  }

  createList(body) {
    return this.http.post(`/api/list`, body)
    .map((res:Response) => res.json());
  }

  deleteList(id) {
    return this.http.delete(`/api/list/${id}`)
    .map((res:Response) => res.json());
  }
}