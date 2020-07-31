import { MatDialog } from '@angular/material/dialog';
import { AddMapModalComponent } from '../add-map-modal/add-map-modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Office } from '../../models/office';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Office } from '../models/office';
import { MapSearchService } from './map-search.service';
import { OfficeAddress } from '../../models/office-address';
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
  @Output() searchEvent = new EventEmitter<OfficeAddress>();
  floors: FloorRequestConfig[];

  constructor(
    private mapSearchService: MapSearchService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setCountries();
  }

  addNewOffice(): void {
    this.dialog.open(AddMapModalComponent, {
      width: '30rem',
    });
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

        this.searchEvent.emit({
          country: country,
          city: undefined,
          address: undefined,
        });
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

          this.searchEvent.emit({
            country: country,
            city: city,
            address: undefined,
          });
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
