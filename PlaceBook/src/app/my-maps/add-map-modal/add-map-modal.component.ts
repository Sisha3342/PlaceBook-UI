import { MapService } from './../../my-maps/map/map.service';
import { Office } from './../../models/office';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { MapComponent } from '../../my-maps/map/map.component';

@Component({
  selector: 'app-add-map-modal',
  templateUrl: './add-map-modal.component.html',
  styleUrls: ['./add-map-modal.component.scss'],
})
export class AddMapModalComponent {
  office: Office;

  constructor(
    public dialogRef: MatDialogRef<AddMapModalComponent>,
    public dialog: MatDialog,
    public service: MapService
  ) {}

  resetForm(form?: NgForm): void {
    this.service.formData = {
      id: null,
      address: {
        country: '',
        city: '',
        address: '',
      },
    };
  }
  onSubmit(form: NgForm): void {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm): void {
    this.service.postOffice(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
