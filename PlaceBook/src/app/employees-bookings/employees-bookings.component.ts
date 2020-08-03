import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { EmployeesBookingsColumnService } from './employees-bookings-column.service';
import { STATUS } from '../models/status';
import { EmployeesBookingsService } from './employees-bookings.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
    public dialog: MatDialog
  ) {
    this.setBookings(this.status.active);
  }

  setBookings(statusLabel: string): void {
    this.employeesBookingsService
      .getBookings(this.status[statusLabel.toLowerCase()])
      .subscribe((bookings) => {
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
}
