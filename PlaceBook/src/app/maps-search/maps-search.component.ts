import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-search',
  templateUrl: './maps-search.component.html',
  styleUrls: ['./maps-search.component.scss'],
})
export class MapsSearchComponent implements OnInit {
  @Input() showFloor: boolean;

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

  floors: string[] = ['1', '2', '3', '4'];

  constructor() {}

  ngOnInit(): void {}
}
