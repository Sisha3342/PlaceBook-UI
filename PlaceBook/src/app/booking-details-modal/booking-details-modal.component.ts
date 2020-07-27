import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '../models/booking';
import { User } from '../models/user';
import { BookingDetailsService } from './booking-details.service';

@Component({
  selector: 'app-booking-details-modal',
  templateUrl: 'booking-details-modal.component.html',
  styleUrls: ['./booking-details-modal.component.scss'],
})
export class BookingDetailsModalComponent {
  booking: Booking;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: [Booking, User],
    private bookingDetailsService: BookingDetailsService
  ) {
    this.bookingDetailsService
      .getBookingDetails(data[0].id, data[1].id)
      .subscribe((booking: Booking) => {
        this.booking = booking;
      });
  }
}
