import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.scss'],
})
export class AddOfficeComponent {
  country: string;
  city: string;
  address: string;

  constructor(public dialogRef: MatDialogRef<AddOfficeComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
