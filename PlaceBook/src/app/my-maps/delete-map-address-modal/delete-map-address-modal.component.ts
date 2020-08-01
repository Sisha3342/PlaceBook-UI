import { Component, OnInit, Inject } from '@angular/core';
import { Office } from '../../models/office';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MapService } from '../map.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-map-address-modal',
  templateUrl: './delete-map-address-modal.component.html',
  styleUrls: ['./delete-map-address-modal.component.scss'],
})
export class DeleteMapAddressModalComponent implements OnInit {
  okMessage = 'Operation is OK';
  warnMessage = 'Operation failed';

  constructor(
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteMapAddressModalComponent>,
    public dialog: MatDialog,
    public mapService: MapService,
    @Inject(MAT_DIALOG_DATA) public data: Office
  ) {}

  ngOnInit(): void {}
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

  onDeleteOffice(id: number): void {
    this.mapService.deleteOffice(this.data.id).subscribe(
      () => {
        this.resetForm();
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
}
