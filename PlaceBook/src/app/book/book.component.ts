import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Floor } from '../models/floor';
import { FloorsConverterService } from '../map-editor/floors-converter.service';
import { FloorRequestConfig } from '../models/floor-request-config';
import { Office } from '../models/office';
import { FormGroup } from '@angular/forms';
import { BookService } from './book.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Place } from '../models/place';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MatDatepickerModule],
})
export class BookComponent implements OnInit {
  @Input() showFloor: boolean;
  currentFloor: Floor;
  currentPlace: Place;
  currentOffice: Office;
  dateRange: FormGroup;
  places: Place[];

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

      this.setPlaces(this.currentFloor.id, this.dateRange);
    } else {
      this.currentFloor = undefined;
    }

    this.currentPlace = undefined;
  }

  changeCurrentOffice(office: Office): void {
    this.currentOffice = office;
  }

  changeDateRange(dateRange: FormGroup): void {
    this.dateRange = dateRange;

    if (this.currentFloor !== undefined) {
      this.setPlaces(this.currentFloor.id, this.dateRange);
    }
  }

  getPlaceInfo(place: Place): void {
    this.currentPlace = place;
  }

  setPlaces(floorId: number, dateRange: FormGroup): void {
    this.bookService.getPlaces(floorId, dateRange).subscribe((places) => {
      this.places = places;
    });
  }

  addBooking(): void {
    // this.bookService
    //   .book(
    //     this.authService.getCurrentUser().id,
    //     this.dateRange,
    //     this.currentPlace.number,
    //     this.currentFloor.floorNumber,
    //     this.currentOffice.id
    //   )
    //   .subscribe(() => {
    //     this.router.navigate(['/my_bookings']);
    //   });
  }
}
