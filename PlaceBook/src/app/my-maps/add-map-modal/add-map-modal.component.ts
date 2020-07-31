import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Office } from 'src/app/models/office';
import { MapService } from '../map.service';

@Component({
  selector: 'app-add-map-modal',
  templateUrl: './add-map-modal.component.html',
  styleUrls: ['./add-map-modal.component.scss'],
})
export class AddMapModalComponent implements OnInit {
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

  onSubmitAddOfficeModal(form: NgForm): void {
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
