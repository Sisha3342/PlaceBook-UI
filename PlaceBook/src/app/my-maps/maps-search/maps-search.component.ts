import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    this.dialog.open(AddMapModalComponent, {
      width: '30rem',
    });
  }

  ngOnInit(): void {}
}
