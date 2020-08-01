import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Floor } from '../models/floor';
import { FloorsConverterService } from '../map-editor/floors-converter.service';
import { FloorRequestConfig } from '../models/floor-request-config';
import { MapObject } from '../map-editor/map-model/map-object';
import { Office } from '../models/office';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MatDatepickerModule],
})
export class BookComponent implements OnInit {
  @Input() showFloor: boolean;
  currentFloor: Floor;
  currentPlace: MapObject;
  currentOffice: Office;

  bookingDate = {
    start: new Date(),
    end: new Date(),
  };

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private floorsConverterService: FloorsConverterService) {}

  ngOnInit(): void {
    this.bookingDate.start.setDate(new Date().getDate() + 1);
    this.bookingDate.end.setDate(new Date().getDate() + 1);
  }

  changeCurrentFloor(floorRequestConfig: FloorRequestConfig): void {
    if (floorRequestConfig !== undefined) {
      this.currentFloor = this.floorsConverterService.convertFromRequest(
        floorRequestConfig
      );
    } else {
      this.currentFloor = undefined;
    }

    this.currentPlace = undefined;
  }

  changeCurrentOffice(office: Office): void {
    this.currentOffice = office;
  }

  getPlaceInfo(item: MapObject): void {
    console.log(item);
    this.currentPlace = item;
  }
}
