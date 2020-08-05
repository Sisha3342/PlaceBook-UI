import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatePlaceModalComponent } from '../my-bookings/rate-place-modal/rate-place-modal.component';
import { Column } from '../models/column';
import { Booking } from '../models/booking';
import { Office } from '../models/office';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() status: string;
  @Input() columns: Column[];
  @Input() openDetails;
  @Input() isViewRating: boolean;
  @Output() openEdit = new EventEmitter();
  @Output() openDelete = new EventEmitter();
  @Output() openEditMap = new EventEmitter<Office>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  getBookmarkClass(): string {
    return this.status.toLowerCase();
  }

  getTableColumns(): Array<string> {
    return this.columns.map((column) => {
      return column.id;
    });
  }

  edit(event, element): void {
    event.stopPropagation();

    this.openEdit.emit(element);
  }

  cancel(element: any): void {
    console.log(element);
  }

  editMap(event: MouseEvent, element: Office): void {
    event.stopPropagation();

    this.openEditMap.emit(element);
  }

  openRatePlaceDialog(event: Event, element: Booking): void {
    event.stopPropagation();
    this.dialog.open(RatePlaceModalComponent, {
      data: { isViewRating: this.isViewRating, booking: element },
    });
  }

  delete(event, element): void {
    event.stopPropagation();

    this.openDelete.emit(element);
  }
}
