import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Booking[];
  @Input() status: string;

  defaultColumns: string[] = ['place', 'date', 'country', 'city', 'address'];

  constructor() {}

  ngOnInit(): void {}

  getBookmarkClass(): string {
    return this.status;
  }

  getTableColumns(): Array<string> {
    if (this.status === 'active' || this.status === 'completed') {
      return this.defaultColumns.concat(['action']);
    }

    return this.defaultColumns;
  }
}
