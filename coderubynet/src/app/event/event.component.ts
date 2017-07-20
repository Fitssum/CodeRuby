import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Array<Event>;
  eventForm: FormGroup;

  constructor(private _eventService: EventService, fb: FormBuilder, private router: Router) {

    this.eventForm = fb.group({
      'title' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(75)])],
      'date' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(75)])],
      'url' : [null, Validators.required]
    });

  }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(res => this.events = res);
  }

  addEvent(event: Event) {
    this._eventService.insertEvent(event)
      .subscribe(newEvent => {
        this.events.push(newEvent);
        this.router.navigateByUrl('/');
      })
    }
  }
