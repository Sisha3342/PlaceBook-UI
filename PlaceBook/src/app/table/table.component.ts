import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatePlaceModalComponent } from '../my-bookings/rate-place-modal/rate-place-modal.component';
import { Column } from '../models/column';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Booking[];
  @Input() status: string;
  @Input() columns: Column[];
  @Input() openDetails;

  constructor(public dialog: MatDialog) {}

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

  openRatePlaceDialog(event: Event): void {
    event.stopPropagation();
    this.dialog.open(RatePlaceModalComponent);
  }
}
