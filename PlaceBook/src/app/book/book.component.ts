import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Floor } from '../models/floor';
import { FloorsConverterService } from '../map-editor/floors-converter.service';
import { FloorRequestConfig } from '../models/floor-request-config';
import { Office } from '../models/office';
import { FormGroup } from '@angular/forms';
import { BookService } from './book.service';
import { AuthService } from '../auth/auth.service';
import { Place } from '../models/place';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MatDatepickerModule],
})
export class BookComponent implements OnInit {
  @Input() showFloor: boolean;
  userId = this.authService.getCurrentUser().id;
  currentFloor: Floor;
  currentPlace: Place;
  currentOffice: Office;
  dateRange: FormGroup;
  places: Place[];

  constructor(
    private floorsConverterService: FloorsConverterService,
    private bookService: BookService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit(): void {}

  changeCurrentFloor(floorRequestConfig: FloorRequestConfig): void {
    if (floorRequestConfig) {
      this.currentFloor = this.floorsConverterService.convertFromRequest(
        floorRequestConfig
      );

      this.setPlaces(this.currentFloor.id, this.dateRange);
    } else {
      this.currentFloor = undefined;
      this.currentPlace = undefined;
    }
  }

  changeCurrentOffice(office: Office): void {
    this.currentOffice = office;
  }

  changeDateRange(dateRange: FormGroup): void {
    this.dateRange = dateRange;

    if (this.currentFloor) {
      this.setPlaces(this.currentFloor.id, this.dateRange);
    }
  }

  getPlaceInfo(place: Place): void {
    this.currentPlace = place;
  }

  setPlaces(floorId: number, dateRange: FormGroup): void {
    this.bookService.getPlaces(floorId, dateRange).subscribe((places) => {
      this.places = places;
      this.currentPlace = undefined;
    });
  }

  addBooking(): void {
    this.bookService
      .book(this.userId, this.currentPlace.placeId, this.dateRange)
      .subscribe(() => {
        this.snackbar.open('Successful book', 'Close', {
          verticalPosition: 'top',
          panelClass: 'success',
        });
        this.setPlaces(this.currentFloor.id, this.dateRange);

        this.route.navigate(['/my_bookings']);
      });
  }
}
