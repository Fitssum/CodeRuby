import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// allows to transform from api to json data
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

  result:any;

  constructor(private _http: Http) { }

// this is referenced/accessed from api.js. It is also created a constant 'api' in server.js
  getEvents() {
    return this._http.get("/api/events")
    .map(result => this.result = result.json())
  }

}
