import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { MatDialog } from '@angular/material/dialog';
import { RatePlaceModalComponent } from '../my-bookings/rate-place-modal/rate-place-modal.component';
import { BookingDetailsModalComponent } from './../../booking-details-modal/booking-details-modal.component';
import { Column } from '../models/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Booking[];
  @Input() status: string;
  @Input() columns: Column[];

  constructor(public dialog: MatDialog) {}

  openBookingDetailsModal(event: Event, booking: Booking): void {
    this.dialog.open(BookingDetailsModalComponent, {
      width: '30rem',
      data: booking,
    });
  }

  ngOnInit(): void {}

  getBookmarkClass(): string {
    return this.status;
  }

  getTableColumns(): Array<string> {
    return this.columns.map((column) => {
      return column.id;
    });
  }

  cancelBooking(event: Event): void {
    event.stopPropagation();
  }

  editBooking(event: Event): void {
    event.stopPropagation();
  }
  openRatePlaceDialog(): void {
    this.dialog.open(RatePlaceModalComponent);
  }
}
