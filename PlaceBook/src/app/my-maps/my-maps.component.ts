import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { Office } from '../models/office';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsColumnService],
})
export class MyMapsComponent implements OnInit {
  DATA: Office[] = [
    {
      id: 1,
      address: {
        country: 'Belarus',
        city: 'Minsk',
        address: 'Kuprevicha 3',
      },
      worktimeStart: '123',
      worktimeEnd: '321',
      deleted: false,
    },
    {
      id: 2,
      address: {
        country: 'Belarus',
        city: 'Minsk',
        address: 'Kuprevicha 11',
      },
      worktimeStart: '123',
      worktimeEnd: '321',
      deleted: false,
    },
    {
      id: 3,
      address: {
        country: 'Belarus',
        city: 'Grodno',
        address: 'Kuprevicha 321',
      },
      worktimeStart: '123',
      worktimeEnd: '321',
      deleted: false,
    },
  ];

  constructor(
    private mapService: MapService,
    private columnMapService: MyMapsColumnService
  ) {}

  ngOnInit(): void {}

  getData(): Office[] {
    return this.DATA;
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }
}
