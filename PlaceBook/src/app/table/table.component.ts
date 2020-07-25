import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Booking } from '../models/booking';
import { MatDialog } from '@angular/material/dialog';
import { RatePlaceModalComponent } from '../my-bookings/rate-place-modal/rate-place-modal.component';
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

  ngOnInit(): void {}

  getBookmarkClass(): string {
    return this.status;
  }

  getTableColumns(): Array<string> {
    return this.columns.map((column) => {
      return column.id;
    });
  }

  openRatePlaceDialog(): void {
    this.dialog.open(RatePlaceModalComponent);
  }
}
