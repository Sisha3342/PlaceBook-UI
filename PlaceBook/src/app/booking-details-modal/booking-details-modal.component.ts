import { Component, Inject } from '@angular/core';
import { Employee } from '../models/employee';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-details-modal',
  templateUrl: 'booking-details-modal.component.html',
  styleUrls: ['./booking-details-modal.component.scss'],
})
export class BookingDetailsModalComponent {
  booking: Booking;
  employee: Employee;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Booking) {
    this.booking = this.data;
  }
}
