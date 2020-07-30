import { Component, OnInit, Inject } from '@angular/core';
import { Booking } from '../models/booking';
import { BookingDetailsService } from '../booking-details-modal/booking-details.service';
import { User } from '../models/user';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  booking: Booking;

  constructor(public bookingDetailsService: BookingDetailsService) {
    // this.bookingDetailsService
    //   .getBookingDetails(this.data[0].id, this.data[1].id)
    //   .subscribe((booking: Booking) => {
    //     this.booking = booking;
    //   });
  }

  ngOnInit(): void {}
}
