import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// allows to transform from api to json data
import 'rxjs/add/operator/map';
import { Event } from './event';

@Injectable()
export class EventService {

  result:any;

  constructor(private _http: Http) { }

// this is referenced/accessed from api.js. It is also created a constant 'api' in server.js
  getEvents() {
    return this._http.get("/api/events")
    .map(result => this.result = result.json())
  }

  getEvent(id) {
    return this._http.get("/api/details/"+id)
    .map(result => this.result = result.json());
  }

  insertEvent(event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/events', JSON.stringify(event), options)
      .map(result => this.result = result.json());
  }
}
