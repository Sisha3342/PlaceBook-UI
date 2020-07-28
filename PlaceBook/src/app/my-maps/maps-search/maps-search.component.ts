import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddMapModalComponent } from '../add-map-modal/add-map-modal.component';

@Component({
  selector: 'app-maps-search',
  templateUrl: './maps-search.component.html',
  styleUrls: ['./maps-search.component.scss'],
})
export class MapsSearchComponent implements OnInit {
  countries: string[] = ['Belarus', 'Russia', 'Poland', 'USA'];

  cities: string[] = [
    'Minsk',
    'Grodno',
    'Moscow',
    'Krakow',
    'Kalifornia',
    'Colorado',
    'New York',
  ];

  addresses: string[] = ['Kuprevicha 3', 'Kletskova 13'];

  constructor(public dialog: MatDialog) {}
  addNewOffice(): void {
    const dialogRef = this.dialog.open(AddMapModalComponent);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  }
  ngOnInit(): void {}
}
