import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { MyBookingsColumnService } from './my-bookings-column.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MyBookingsService } from './my-bookings.service';
import { AuthService } from '../auth/auth.service';
import { STATUS } from '../models/status';
import { User } from '../models/user';

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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setBookings(0);
  }

  setBookings(statusIndex: number): void {
    this.myBookingsService
      .getBookings(
        this.authService.getCurrentUser().id,
        this.status[statusIndex]
      )
      .subscribe((bookings: Booking[]) => {
        this.displayedBookings = bookings;
      });
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }

  openBookingDetailsModal(event: Event, booking: Booking, user: User): void {
    this.dialog.open(BookingDetailsModalComponent, {
      width: '30rem',
      data: [booking, user],
    });
  }
}
