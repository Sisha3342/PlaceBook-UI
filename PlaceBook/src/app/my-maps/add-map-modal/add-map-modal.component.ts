import { MapService } from './add-map.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-map-modal',
  templateUrl: './add-map-modal.component.html',
  styleUrls: ['./add-map-modal.component.scss'],
})
export class AddMapModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddMapModalComponent>,
    public dialog: MatDialog,
    public service: MapService
  ) {}

  resetForm(form?: NgForm): void {
    this.service.formData = {
      id: null,
      country: '',
      city: '',
      address: '',
      worktimeStart: '',
      worktimeEnd: '',
    };
  }
  onSubmit(form: NgForm): void {
    this.insertRecord(form);
    this.dialogRef.close();
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
