import { Component, OnInit } from '@angular/core';
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
    public service: MapService
  ) {}

  resetForm(): void {
    this.formData = {
      id: null,
      address: {
        country: '',
        city: '',
        address: '',
      },
      worktimeStart: '',
      worktimeEnd: '',
      deleted: false,
    };
  }

  onSubmitEditOffice(form: NgForm): void {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm): void {
    this.service.postOffice(form.value).subscribe(() => {
      this.resetForm();
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
