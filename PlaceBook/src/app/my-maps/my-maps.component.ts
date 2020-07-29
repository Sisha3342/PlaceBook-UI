import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MapList } from '../models/map';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { Office } from './map-models/office';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsColumnService],
})
export class MyMapsComponent implements OnInit {
  countries: string[];
  cities: string[];
  offices: Office[];

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

  constructor(
    private mapService: MapService,
    private columnMapService: MyMapsColumnService
  ) {}

  ngOnInit(): void {}

  setCountries(): void {
    this.mapService.getCountries().subscribe((countries: string[]) => {
      this.countries = countries;
    });
  }

  getData(): MapList[] {
    return this.DATA;
  }

  setCities(country: string): void {
    this.mapService.getCities(country).subscribe((cities: string[]) => {
      this.cities = cities;
    });
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }
  setOffices(country: string, city: string): void {
    this.mapService.getOffices(country, city).subscribe((offices: Office[]) => {
      this.offices = offices;
    });
  }
}
