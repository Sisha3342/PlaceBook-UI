import { BookingDetailsService } from './../../booking-details-modal/booking-details.service';
import { Component, Inject } from '@angular/core';
import { User } from '../../models/user';
import { Booking } from '../../models/booking';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { STATUS } from '../../models/status';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BookingDetails } from '../../models/booking-details';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-booking-details-modal',
  templateUrl: 'booking-details-modal.component.html',
  styleUrls: ['./booking-details-modal.component.scss'],
})
export class BookingDetailsModalComponent {
  employee: User;
  booking: BookingDetails;
  status = STATUS;
  showSpinner = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Booking,
    private bookingDetailsService: BookingDetailsService,
    private snackbar: MatSnackBar,
    private authService: AuthService
  ) {
    const userId = this.authService.getCurrentUser().id;

    this.bookingDetailsService.getBookingDetails(data.id, userId).subscribe(
      (booking: BookingDetails) => {
        this.booking = booking;
      },
      (error) => {
        this.snackbar.open("Can't load booking info", 'Close', {
          verticalPosition: 'top',
        });
      }
    );

    this.bookingDetailsService
      .getBookingDetails(data.id, userId)
      .subscribe(() => (this.showSpinner = false));
  }
}
