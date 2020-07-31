import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { EmployeesBookingsColumnService } from './employees-bookings-column.service';
import { STATUS } from '../models/status';

@Component({
  selector: 'app-employees-bookings',
  templateUrl: './employees-bookings.component.html',
  styleUrls: ['./employees-bookings.component.scss'],
  providers: [EmployeesBookingsColumnService],
})
export class EmployeesBookingsComponent {
  status = STATUS;

  DATA: Booking[] = [];

  constructor(private columnService: EmployeesBookingsColumnService) {}

  getData(status: string): Booking[] {
    return this.DATA.filter((item) => item.status === status);
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }
}
