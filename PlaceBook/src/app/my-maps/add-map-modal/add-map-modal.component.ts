import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Office } from 'src/app/models/office';
import { MapService } from '../map.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-map-modal',
  templateUrl: './add-map-modal.component.html',
  styleUrls: ['./add-map-modal.component.scss'],
})
export class AddMapModalComponent implements OnInit {
  data: Office;
  okMessage = 'Operation is OK';
  warnMessage = 'Operation failed';

  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<AddMapModalComponent>,
    public dialog: MatDialog,
    public service: MapService
  ) {}

  resetForm(): void {
    this.data = {
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

  onSubmitAddOfficeModal(form: NgForm): void {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm): void {
    this.service.postOffice(form.value).subscribe(
      (res) => {
        this.resetForm();
        this.snackbar.open('Office address added', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
        });
        this.dialogRef.close();
      },
      (error) => {
        this.snackbar.open(this.warnMessage, 'Close', {
          verticalPosition: 'top',
          duration: 2000,
        });
      }
    );
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
