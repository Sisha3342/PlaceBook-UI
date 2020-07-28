import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddMapModalComponent } from './add-map-modal/add-map-modal.component';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
})
export class MyMapsComponent {
  constructor(public dialog: MatDialog) {}

  addNewOffice(): void {
    const dialogRef = this.dialog.open(AddMapModalComponent);
    dialogRef.afterClosed().subscribe((result) => {});
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  }
}
