import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-selector',
  templateUrl: './maps-selector.component.html',
  styleUrls: ['./maps-selector.component.scss'],
})
export class MapsSelectorComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
