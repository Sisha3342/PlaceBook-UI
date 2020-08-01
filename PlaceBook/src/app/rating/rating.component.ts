import { Component, OnInit, Inject, Input } from '@angular/core';
import { BookingDetails } from '../models/booking-details';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  booking: BookingDetails;

  constructor() {}

  @Input()
  set book(bookingObj: BookingDetails) {
    this.booking = bookingObj;
  }

  get book(): BookingDetails {
    return this.booking;
  }

  ngOnInit(): void {}
}
