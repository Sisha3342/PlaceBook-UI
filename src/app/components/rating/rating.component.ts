import { Component, Input } from '@angular/core';
import { BookingMark } from '../../models/booking-mark';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  rate: BookingMark;
  @Input() status: string;

  constructor() {}

  @Input()
  set rating(rate: BookingMark) {
    this.rate = rate;
  }

  get rating(): BookingMark {
    return this.rate;
  }
}
