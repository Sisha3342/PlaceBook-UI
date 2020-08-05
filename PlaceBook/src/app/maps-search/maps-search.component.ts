import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MapSearchService } from './map-search.service';
import { FloorRequestConfig } from '../models/floor-request-config';
import { MatSelect } from '@angular/material/select';
import { Office } from '../models/office';
import { OfficeAddress } from '../models/office-address';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-maps-search',
  templateUrl: './maps-search.component.html',
  styleUrls: ['./maps-search.component.scss'],
})
export class MapsSearchComponent implements OnInit {
  @Input() showFloor: boolean;
  @Output() changeFloor = new EventEmitter<FloorRequestConfig>();
  @Output() changeOffice = new EventEmitter<Office>();

  countries: string[];
  cities: string[];
  offices: Office[];
  @Output() searchEvent = new EventEmitter<OfficeAddress>();
  floors: FloorRequestConfig[];

  constructor(
    private mapSearchService: MapSearchService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.setCountries();
  }

  setCountries(): void {
    this.spinner.show('showCountriesSpinner');
    this.mapSearchService.getCountries().subscribe((countries: string[]) => {
      this.countries = countries;
      this.spinner.hide('showCountriesSpinner');
    });
  }

  setCities(country: string, select: MatSelect): void {
    this.spinner.show('showCitiesSpinner');
    this.resetCities();
    select.value = undefined;
    if (country !== undefined) {
      this.mapSearchService.getCities(country).subscribe((cities: string[]) => {
        this.cities = cities;

        this.searchEvent.emit({
          country,
          city: undefined,
          address: undefined,
        });
        this.spinner.hide('showCitiesSpinner');
      });
    }
  }

  setOffices(country: string, city: string): void {
    this.spinner.show('showOfficesSpinner');
    this.resetOffices();

    if (country !== undefined && city !== undefined) {
      this.mapSearchService
        .getOffices(country, city)
        .subscribe((offices: Office[]) => {
          this.offices = offices;

          this.searchEvent.emit({
            country,
            city,
            address: undefined,
          });
          this.spinner.hide('showOfficesSpinner');
        });
    }
  }

  setFloors(office: Office): void {
    this.spinner.show('showFloorsSpinner');
    this.changeOffice.emit(office);
    this.resetFloors();

    if (office !== undefined) {
      this.mapSearchService
        .getFloors(office.id)
        .subscribe((floors: FloorRequestConfig[]) => {
          this.floors = floors;
          this.spinner.hide('showFloorsSpinner');
        });
    }
  }

  resetCities(): void {
    this.cities = [];
    this.resetOffices();
  }

  resetOffices(): void {
    this.changeOffice.emit(undefined);
    this.offices = [];
    this.resetFloors();
  }

  resetFloors(): void {
    this.changeFloor.emit(undefined);
    this.floors = [];
  }

  // addNewOffice(): void {
  //   this.dialog.open(AddMapModalComponent, {
  //     width: '30rem',
  //   });
  // }
}
