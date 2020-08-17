import { Component, Inject } from '@angular/core';
import { Office } from 'src/app/models/office';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MapService } from '../map.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-delete-office-address',
  templateUrl: './delete-office-address.component.html',
  styleUrls: ['./delete-office-address.component.scss'],
})
export class DeleteOfficeAddressComponent {
  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteOfficeAddressComponent>,
    public dialog: MatDialog,
    public mapService: MapService,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: Office
  ) {}

  deleteOffice(): void {
    this.spinner.show('deleteSpinner');
    this.mapService.deleteOffice(this.data.id).subscribe(
      () => {
        this.snackbar.open('Office was successfully removed', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
          panelClass: 'success',
        });
        this.dialogRef.close();
        this.spinner.hide('deleteSpinner');
      },
      () => {
        this.snackbar.open('Office was not removed', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
        });
        this.spinner.hide('deleteSpinner');
      }
    );
  }
}
