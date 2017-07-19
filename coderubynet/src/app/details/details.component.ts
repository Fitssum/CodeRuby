import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  event:Array<Event>;

  constructor(private _eventService: EventService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {

      let id = params['id'];

      this._eventService.getEvent(id)
        .subscribe(res => this.event = res);
    })
  }

}
