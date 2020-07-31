import { Component, OnInit, Inject, Input } from '@angular/core';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  booking: Booking;

  constructor() {}

  @Input()
  set book(bookingObj: Booking) {
    this.booking = bookingObj;
  }

  get book(): Booking {
    return this.booking;
  }

  ngOnInit(): void {}
}
