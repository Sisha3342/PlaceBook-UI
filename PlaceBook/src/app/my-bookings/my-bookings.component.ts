import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { MyBookingsColumnService } from './my-bookings-column.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MyBookingsService } from './my-bookings.service';
import { AuthService } from '../auth/auth.service';
import { STATUS } from '../models/status';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  providers: [MyBookingsColumnService],
})
export class MyBookingsComponent implements OnInit {
  displayedBookings: Booking[];
  status = STATUS;

  constructor(
    private myBookingsService: MyBookingsService,
    private authService: AuthService,
    private columnService: MyBookingsColumnService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.setBookings(this.status.active);
  }

  setBookings(statusLabel: string): void {
    this.myBookingsService
      .getBookings(
        this.authService.getCurrentUser().id,
        this.status[statusLabel.toLowerCase()]
      )
      .subscribe((bookings: Booking[]) => {
        this.displayedBookings = bookings;
      });
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }

  openBookingDetailsModal(event: Event, booking: Booking): void {
    this.dialog.open(BookingDetailsModalComponent, {
      width: '30rem',
      data: booking,
    });
  }

  deleteBooking(booking: Booking): void {
    this.myBookingsService
      .deleteBooking(booking.id)
      .subscribe((removedBooking) => {
        this.snackbar.open('Booking was deleted', 'Close', {
          verticalPosition: 'top',
          panelClass: 'success',
          duration: 3000,
        });

        booking = removedBooking;
        this.displayedBookings = [].concat(this.displayedBookings);
      });
  }
}
