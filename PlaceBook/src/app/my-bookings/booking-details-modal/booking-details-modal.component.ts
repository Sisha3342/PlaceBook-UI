import { BookingDetailsService } from './../../booking-details-modal/booking-details.service';
import { Component, Inject } from '@angular/core';
import { User } from '../../models/user';
import { Booking } from '../../models/booking';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { STATUS } from '../../models/status';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking-details-modal',
  templateUrl: 'booking-details-modal.component.html',
  styleUrls: ['./booking-details-modal.component.scss'],
})
export class BookingDetailsModalComponent {
  booking: Booking;
  employee: User;
  status = STATUS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: [Booking, User],
    private bookingDetailsService: BookingDetailsService,
    private snackbar: MatSnackBar
  ) {
    this.bookingDetailsService
      .getBookingDetails(data[0].id, data[1].id)
      .subscribe(
        (booking: Booking) => {
          this.booking = booking;
        },
        (error) => {
          this.snackbar.open("Can't load booking info", 'Close', {
            verticalPosition: 'top',
          });
        }
      );
  }
}
