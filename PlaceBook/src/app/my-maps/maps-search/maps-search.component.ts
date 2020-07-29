import { Component, OnInit } from '@angular/core';
import { Office } from '../map-models/office';
import { MapSearchService } from './map-search.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-maps-search',
  templateUrl: './maps-search.component.html',
  styleUrls: ['./maps-search.component.scss'],
})
export class MapsSearchComponent implements OnInit {
  countries: string[];
  cities: string[];
  offices: Office[];

  constructor(private mapSearchService: MapSearchService) {}

  ngOnInit(): void {
    this.setCountries();
  }

  setCountries(): void {
    this.mapSearchService.getCountries().subscribe((countries: string[]) => {
      this.countries = countries;
    });
  }

  setCities(country: string): void {
    this.resetCities();
    this.resetOffices();

    if (country !== undefined) {
      this.mapSearchService.getCities(country).subscribe((cities: string[]) => {
        this.cities = cities;
      });
    }
  }

  setOffices(country: string, city: string): void {
    this.resetOffices();

    if (country !== undefined && city !== undefined) {
      this.mapSearchService
        .getOffices(country, city)
        .subscribe((offices: Office[]) => {
          this.offices = offices;
        });
    }
  }

  resetCities(): void {
    this.cities = [];
  }

  resetOffices(): void {
    this.offices = [];
  }
}
