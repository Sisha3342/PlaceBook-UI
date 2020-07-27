import { MapService } from './../../my-maps/map/map.service';
import { Office } from './../../models/office';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapComponent } from '../../my-maps/map/map.component';

@Component({
  selector: 'app-add-office-modal',
  templateUrl: './add-office-modal.component.html',
  styleUrls: ['./add-office-modal.component.scss'],
})
export class AddOfficeModalComponent {
  office: Office;

  constructor(
    public dialogRef: MatDialogRef<AddOfficeModalComponent>,
    public dialog: MatDialog,
    public service: MapService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOfficeModalComponent, {
      data: {
        id: this.office.id,
        address: {
          country: this.office.address.country,
          city: this.office.address.city,
          address: this.office.address.address,
        },
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
