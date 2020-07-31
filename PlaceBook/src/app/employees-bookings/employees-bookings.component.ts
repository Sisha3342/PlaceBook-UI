import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { EmployeesBookingsColumnService } from './employees-bookings-column.service';
import { STATUS } from '../models/status';
import { EmployeesBookingsService } from './employees-bookings.service';

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
    private employeesBookingsService: EmployeesBookingsService
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
}
