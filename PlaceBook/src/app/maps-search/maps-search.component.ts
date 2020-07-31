import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Office } from '../models/office';
import { MapSearchService } from './map-search.service';
import { FloorRequestConfig } from '../models/floor-request-config';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-maps-search',
  templateUrl: './maps-search.component.html',
  styleUrls: ['./maps-search.component.scss'],
})
export class MapsSearchComponent implements OnInit {
  @Input() showFloor: boolean;
  @Output() changeFloor = new EventEmitter<FloorRequestConfig>();

  countries: string[];
  cities: string[];
  offices: Office[];
  floors: FloorRequestConfig[];

  constructor(private mapSearchService: MapSearchService) {}

  ngOnInit(): void {
    this.setCountries();
  }

  setCountries(): void {
    this.mapSearchService.getCountries().subscribe((countries: string[]) => {
      this.countries = countries;
    });
  }

  setCities(country: string, select: MatSelect): void {
    this.resetCities();
    select.value = undefined;
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

  setFloors(office: Office): void {
    this.resetFloors();

    if (office !== undefined) {
      this.mapSearchService
        .getFloors(office.id)
        .subscribe((floors: FloorRequestConfig[]) => {
          this.floors = floors;
        });
    }
  }

  resetCities(): void {
    this.cities = [];
    this.resetOffices();
  }

  resetOffices(): void {
    this.offices = [];
    this.resetFloors();
  }

  resetFloors(): void {
    this.changeFloor.emit(undefined);
    this.floors = [];
  }
}
