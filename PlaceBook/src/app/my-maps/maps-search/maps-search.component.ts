import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
