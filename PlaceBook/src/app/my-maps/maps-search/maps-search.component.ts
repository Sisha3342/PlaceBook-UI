import { MatDialog } from '@angular/material/dialog';
import { AddMapModalComponent } from '../add-map-modal/add-map-modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Office } from '../../models/office';
import { MapSearchService } from './map-search.service';
import { OfficeAddress } from '../../models/office-address';

@Component({
  selector: 'app-maps-search',
  templateUrl: './maps-search.component.html',
  styleUrls: ['./maps-search.component.scss'],
})
export class MapsSearchComponent implements OnInit {
  countries: string[];
  cities: string[];
  offices: Office[];
  floors: string[] = ['1', '2', '3', '4'];
  @Output() searchEvent = new EventEmitter<OfficeAddress>();

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

  setCities(country: string): void {
    this.resetCities();
    this.resetOffices();

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

  resetCities(): void {
    this.cities = [];
  }

  resetOffices(): void {
    this.offices = [];
  }
}
