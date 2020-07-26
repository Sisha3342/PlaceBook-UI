import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Booking } from '../models/booking';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MyBookingsService } from './my-bookings.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyBookingsComponent implements OnInit {
  displayedBookings: Booking[];
  statuses = ['ACTIVE', 'COMPLETED', 'CANCELED'];

  constructor(
    private myBookingsService: MyBookingsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setBookings(0);
  }

  setBookings(statusIndex: number): void {
    this.myBookingsService
      .getBookings(
        this.authService.getCurrentUser().id,
        this.statuses[statusIndex]
      )
      .subscribe((bookings: Booking[]) => {
        this.displayedBookings = bookings;
      });
  }
}
