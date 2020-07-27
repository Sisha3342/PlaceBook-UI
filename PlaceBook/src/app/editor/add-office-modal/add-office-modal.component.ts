import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-office-modal',
  templateUrl: './add-office-modal.component.html',
  styleUrls: ['./add-office-modal.component.scss'],
})
export class AddOfficeModalComponent {
  country: string;
  city: string;
  address: string;

  constructor(public dialogRef: MatDialogRef<AddOfficeModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
