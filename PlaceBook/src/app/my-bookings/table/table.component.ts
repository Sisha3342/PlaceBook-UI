import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../models/booking';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Booking[];
  @Input() status: string;

  displayedColumns: string[] = ['place', 'date', 'country', 'city', 'address', 'delete-button'];

  constructor() { }

  ngOnInit(): void {
  }

  getBookmarkClass(): string {
    return this.status;
  }
}
