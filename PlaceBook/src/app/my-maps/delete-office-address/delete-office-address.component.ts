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
  okMessage = 'Operation is OK';
  warnMessage = 'Operation failed';

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
        this.dialogRef.close();
        this.snackbar.open(this.okMessage, 'Close', {
          verticalPosition: 'top',
          duration: 2000,
          panelClass: 'success',
        });
      },
      (error) => {
        this.snackbar.open(this.warnMessage, 'Close', {
          verticalPosition: 'top',
          duration: 2000,
        });
      }
    );
  }
}
