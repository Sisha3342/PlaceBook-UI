import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MapService } from '../map.service';

import { Office } from 'src/app/models/office';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-address-modal',
  templateUrl: './map-address-modal.component.html',
  styleUrls: ['./map-address-modal.component.scss'],
})
export class EditMapAddressComponent implements OnInit {
  isEdit: boolean;

  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<EditMapAddressComponent>,
    public dialog: MatDialog,
    public mapService: MapService,
    @Inject(MAT_DIALOG_DATA) public data: Office,
    private route: Router
  ) {
    this.isEdit = data.id !== null;
  }

  resetForm(): void {
    this.data = {
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

  insertRecord(form: NgForm): void {
    this.mapService.postOffice(form.value).subscribe((office) => {
      this.resetForm();
      this.snackbar.open('Office address was succesfully added', 'Close', {
        verticalPosition: 'top',
        duration: 2000,
        panelClass: 'success',
      });
      this.dialogRef.close();
      this.route.navigate(['editor', { officeId: office.id.toString() }]);
    });
  }

  onSubmit(event: Event, form: NgForm): void {
    event.stopPropagation();
    this.insertRecord(form);
  }

  onUpdateOffice(event: Event, form: any): void {
    event.stopPropagation();
    this.mapService.updateOffice(form.value).subscribe(
      () => {
        this.resetForm();
        this.snackbar.open('Office address was succesfully updated', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
          panelClass: 'success',
        });
        this.dialogRef.close();
      },
      () => {
        this.snackbar.open('Office was not updated', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
        });
      }
    );
  }

  ngOnInit(): void {
    const arrStart = this.data.worktimeStart.split(':');
    this.data.worktimeStart = [arrStart[0], arrStart[1]].join(':');
    const arrEnd = this.data.worktimeEnd.split(':');
    this.data.worktimeEnd = [arrEnd[0], arrEnd[1]].join(':');
  }
}
