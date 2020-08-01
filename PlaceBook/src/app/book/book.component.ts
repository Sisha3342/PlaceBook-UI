import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Floor } from '../models/floor';
import { FloorsConverterService } from '../map-editor/floors-converter.service';
import { FloorRequestConfig } from '../models/floor-request-config';
import { MapObject } from '../map-editor/map-model/map-object';
import { Office } from '../models/office';
import { FormGroup } from '@angular/forms';
import { BookService } from './book.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

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
  dateRange: FormGroup;

  constructor(
    private floorsConverterService: FloorsConverterService,
    private bookService: BookService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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
    this.currentPlace = item;
  }

  addBooking(): void {
    console.log('123');

    this.bookService
      .book(
        this.authService.getCurrentUser().id,
        this.dateRange,
        this.currentPlace.number,
        this.currentFloor.floorNumber,
        this.currentOffice.id
      )
      .subscribe(() => {
        this.router.navigate(['/my_bookings']);
      });
  }
}
