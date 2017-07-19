import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';


//to grab the id from the url
import { Router, ActivatedRoute } from '@angular/router';
// import { routerTransition } from '../animations';

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

      let id = params['id']; //the 'id' is coming from app-routing.module.ts!!

      this._eventService.getEvent(id) //getEvent method is defined in the 'post.service.ts'
        .subscribe(res => this.event = res);//.event is defined in line 16
    })
  }

}
