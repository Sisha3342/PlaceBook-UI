import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '../models/booking';
import { BookingDetailsService } from './booking-details.service';
import { STATUS } from '../models/status';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingDetails } from '../models/booking-details';

@Component({
  selector: 'app-booking-details-modal',
  templateUrl: './booking-details-modal.component.html',
  styleUrls: ['./booking-details-modal.component.scss'],
})
export class BookingDetailsModalComponent {
  booking: BookingDetails;
  status = STATUS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Booking,
    private bookingDetailsService: BookingDetailsService,
    private snackbar: MatSnackBar
  ) {
    this.bookingDetailsService
      .getBookingDetails(data.id, data.userId)
      .subscribe(
        (booking: BookingDetails) => {
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
