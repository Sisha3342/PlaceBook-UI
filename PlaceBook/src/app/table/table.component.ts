import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatePlaceModalComponent } from '../my-bookings/rate-place-modal/rate-place-modal.component';
import { Column } from '../models/column';
import { AuthService } from '../auth/auth.service';
import { Booking } from '../models/booking';

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

  constructor(public dialog: MatDialog, public authService: AuthService) {}

  ngOnInit(): void {}

  getBookmarkClass(): string {
    return this.status.toLowerCase();
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

  openRatePlaceDialog(event: Event, element: Booking): void {
    event.stopPropagation();
    this.dialog.open(RatePlaceModalComponent, {
      data: { isViewRating: this.isViewRating, booking: element },
    });
  }

  getProperty(element, property: string) {
    return eval('element.' + property);
  }
}
