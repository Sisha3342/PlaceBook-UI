import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.scss'],
})
export class AddOfficeComponent {
  constructor(public dialogRef: MatDialogRef<AddOfficeComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
