import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MapService } from '../map.service';
import { AddMapModalComponent } from '../add-map-modal/add-map-modal.component';
import { Office } from 'src/app/models/office';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-map-address-modal',
  templateUrl: './edit-map-address-modal.component.html',
  styleUrls: ['./edit-map-address-modal.component.scss'],
})
export class EditMapAddressModalComponent implements OnInit {
  formData: Office;

  constructor(
    public dialogRef: MatDialogRef<AddMapModalComponent>,
    public dialog: MatDialog,
    public mapService: MapService
  ) {}

  resetForm(): void {
    this.formData = {
      id: null,
      address: {
        country: undefined,
        city: undefined,
        address: undefined,
      },
      worktimeStart: undefined,
      worktimeEnd: undefined,
      deleted: false,
    };
  }

  onUpdateOfficeModal(form: NgForm): void {
    this.mapService.updateOffice(form.value).subscribe(() => {
      this.resetForm();
      this.dialogRef.close();
    });
  }

  updateRecord(form: NgForm): void {
    // this.mapService.postOffice(form.value).subscribe(() => {
    //   this.resetForm();
    //   this.dialogRef.close();
    // });
  }

  ngOnInit(): void {
    // this.mapService.getOffice(officeId: number)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
