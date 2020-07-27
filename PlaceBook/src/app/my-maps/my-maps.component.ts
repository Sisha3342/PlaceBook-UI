import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficeModalComponent } from '../editor/add-office-modal/add-office-modal.component';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
})
export class MyMapsComponent {
  constructor(public dialog: MatDialog) {}

  addNewOffice(): void {
    const dialogRef = this.dialog.open(AddOfficeModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // this.animal = result;
    });
  }
}
