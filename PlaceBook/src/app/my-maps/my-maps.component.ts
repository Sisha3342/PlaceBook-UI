import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MapList } from '../models/map';
import { MyMapsColumnService } from './my-maps-column.service';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsColumnService],
})
export class MyMapsComponent {
  constructor(private columnMapService: MyMapsColumnService) {}
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
