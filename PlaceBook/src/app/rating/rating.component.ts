import { Component, OnInit, Inject, Input } from '@angular/core';
import { Booking } from '../models/booking';
import { BookingMark } from '../models/booking-mark';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  rate: BookingMark;

  constructor() {}

  @Input()
  set rating(rate: BookingMark) {
    this.rate = rate;
  }

  get rating(): BookingMark {
    return this.rate;
  }

  ngOnInit(): void {}
}
