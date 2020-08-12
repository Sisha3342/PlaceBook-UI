import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { EmployeesBookingsColumnService } from './employees-bookings-column.service';
import { STATUS } from '../models/status';
import { EmployeesBookingsService } from './employees-bookings.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CancelBookingModalComponent } from '../my-bookings/cancel-booking-modal/cancel-booking-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employees-bookings',
  templateUrl: './employees-bookings.component.html',
  styleUrls: ['./employees-bookings.component.scss'],
  providers: [EmployeesBookingsColumnService],
})
export class EmployeesBookingsComponent {
  displayedBookings: Booking[];
  status = STATUS;

  constructor(
    private columnService: EmployeesBookingsColumnService,
    private employeesBookingsService: EmployeesBookingsService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {
    this.setBookings(this.status.active);
  }

  setBookings(statusLabel: string): void {
    this.spinner.show('tableSpinner');
    this.employeesBookingsService
      .getBookings(this.status[statusLabel.toLowerCase()])
      .subscribe((bookings) => {
        this.displayedBookings = bookings;
        this.spinner.hide('tableSpinner');
      });
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }

  openCancelDialog(booking: Booking): void {
    const dialogRef = this.dialog.open(CancelBookingModalComponent, {
      width: '25rem',
    });

    dialogRef.afterClosed().subscribe((cancel) => {
      if (cancel) {
        this.deleteBooking(booking);
      }
    });
  }

  deleteBooking(booking: Booking): void {
    this.spinner.show('deleteSpinner');
    this.employeesBookingsService
      .deleteBooking(booking.id)
      .subscribe((removedBooking) => {
        this.snackbar.open('Booking was deleted', 'Close', {
          verticalPosition: 'top',
          panelClass: 'success',
          duration: 3000,
        });

        this.setBookings(this.status.active);
        this.spinner.hide('deleteSpinner');
      });
  }

  openBookingDetailsModal(event: Event, booking: Booking): void {
    this.dialog.open(BookingDetailsModalComponent, {
      width: '30rem',
      data: booking,
    });
  }
}
