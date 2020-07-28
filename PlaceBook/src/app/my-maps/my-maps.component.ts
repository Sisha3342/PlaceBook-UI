import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Office } from './map-models/office';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
})
export class MyMapsComponent implements OnInit {
  countries: string[];
  cities: string[];
  offices: Office[];

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  setCountries(): void {
    this.mapService.getCountries().subscribe((countries: string[]) => {
      this.countries = countries;
    });
  }

  setCities(country: string): void {
    this.mapService.getCities(country).subscribe((cities: string[]) => {
      this.cities = cities;
    });
  }

  setOffices(country: string, city: string): void {
    this.mapService.getOffices(country, city).subscribe((offices: Office[]) => {
      this.offices = offices;
    });
  }
}
