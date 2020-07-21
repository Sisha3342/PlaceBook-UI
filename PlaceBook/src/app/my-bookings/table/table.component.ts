import { AppMaterialModule } from './../../app-material/app-material.module';
import { MatTableModule } from '@angular/material/table';
import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../modal-dialog-details/modal-dialog-details.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Booking[];
  @Input() status: string;

  defaultColumns: string[] = ['place', 'date', 'country', 'city', 'address'];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ModalDialogComponent, {
      width: '30rem',
    });
  }

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
