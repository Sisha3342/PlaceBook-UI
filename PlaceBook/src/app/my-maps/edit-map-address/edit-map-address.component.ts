import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MapService } from '../map.service';
import { AddMapModalComponent } from '../add-map-modal/add-map-modal.component';
import { Office } from 'src/app/models/office';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-map-address',
  templateUrl: './edit-map-address.component.html',
  styleUrls: ['./edit-map-address.component.scss'],
})
export class EditMapAddressComponent implements OnInit {
  okMessage = 'Operation is OK';
  warnMessage = 'Operation failed';

  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<AddMapModalComponent>,
    public dialog: MatDialog,
    public mapService: MapService,
    @Inject(MAT_DIALOG_DATA) public data: Office
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

  onUpdateOffice(event: Event, form: NgForm): void {
    event.stopPropagation();
    this.mapService.updateOffice(form.value).subscribe(
      () => {
        this.resetForm();
        this.snackbar.open(this.okMessage, 'Close', {
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
    const arrStart = this.data.worktimeStart.split(':');
    this.data.worktimeStart = [arrStart[0], arrStart[1]].join(':');
    const arrEnd = this.data.worktimeEnd.split(':');
    this.data.worktimeEnd = [arrEnd[0], arrEnd[1]].join(':');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
