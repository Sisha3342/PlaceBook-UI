import { Component, OnInit, Inject } from '@angular/core';
import { Office } from 'src/app/models/office';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MapService } from '../map.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-office-address',
  templateUrl: './delete-office-address.component.html',
  styleUrls: ['./delete-office-address.component.scss'],
})
export class DeleteOfficeAddressComponent implements OnInit {
  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteOfficeAddressComponent>,
    public dialog: MatDialog,
    public mapService: MapService,
    @Inject(MAT_DIALOG_DATA) public data: Office
  ) {}

  ngOnInit(): void {}

  deleteOffice(): void {
    this.mapService.deleteOffice(this.data.id).subscribe(
      () => {
        this.snackbar.open('Office was successfully removed', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
          panelClass: 'success',
        });
        this.dialogRef.close();
      },
      () => {
        this.snackbar.open('Office was not removed', 'Close', {
          verticalPosition: 'top',
          duration: 2000,
        });
      }
    );
  }
}
