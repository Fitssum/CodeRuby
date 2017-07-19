import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: Array<Event>;

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(res=> this.events = res);
  }

}
