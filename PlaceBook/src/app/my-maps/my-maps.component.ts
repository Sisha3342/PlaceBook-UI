import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MapList } from '../models/map';
import { MyMapsService } from './my-maps.service';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsService],
})
export class MyMapsComponent {
  constructor(private columnMapService: MyMapsService) {}
  DATA: MapList[] = [
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
    {
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
    },
  ];

  getData(): MapList[] {
    return this.DATA;
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }
}
