import { Component, Input } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Floor } from '../../models/floor';
import { FloorsConverterService } from '../../components/map-editor/floor-converter/floors-converter.service';
import { FloorRequestConfig } from '../../models/floor-request-config';
import { Office } from '../../models/office';
import { FormGroup } from '@angular/forms';
import { BookService } from './book.service';
import { AuthService } from '../../services/auth/auth.service';
import { Place } from '../../models/place';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { BookingBlock } from '../../models/booking-block';
import { Observable } from 'rxjs';
import { MapObjectService } from '../../components/map-editor/map-tools/map-object/map-object.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MatDatepickerModule],
})
export class BookComponent {
  @Input() showFloor: boolean;
  currentFloor: Floor;
  currentPlace: Place;
  currentOffice: Office;
  dateRange: FormGroup;
  places: Place[];
  dateFormat = 'YYYY-MM-DD[T]HH:mm:ss';

  timerValue: number;
  showTimer = false;

  constructor(
    private floorsConverterService: FloorsConverterService,
    private bookService: BookService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private route: Router,
    private spinner: NgxSpinnerService,
    private mapObjectService: MapObjectService
  ) {}

  changeCurrentFloor(floorRequestConfig: FloorRequestConfig): void {
    if (floorRequestConfig) {
      this.currentFloor = this.floorsConverterService.convertFromRequest(
        floorRequestConfig
      );

      this.getPlacesObservable(this.currentFloor.id, this.dateRange).subscribe(
        (places) => {
          this.setPlaces(places);
          this.currentPlace = undefined;
        }
      );
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
    this.showTimer = false;

    if (this.currentFloor) {
      this.getPlacesObservable(this.currentFloor.id, this.dateRange).subscribe(
        (places) => {
          this.setPlaces(places);
          this.currentPlace = undefined;
        }
      );
    }
  }

  getPlaceInfo(place: Place): void {
    this.getPlacesObservable(this.currentFloor.id, this.dateRange).subscribe(
      (places) => {
        this.setPlaces(places);
        place = this.mapObjectService.findPlace(places, place.placeNumber);

        if (!place.occupied) {
          this.tryBooking(place);
        } else {
          this.currentPlace = place;
          this.showTimer = false;
        }
      }
    );
  }

  tryBooking(place: Place): void {
    this.bookService
      .tryToBook(place.placeId, this.authService.getCurrentUser().id)
      .subscribe((block: BookingBlock) => {
        if (block.userId === this.authService.getCurrentUser().id) {
          this.timerValue = 60;
          this.showTimer = true;

          this.currentPlace = place;
        } else {
          this.snackbar.open(
            "This place is under another user's reservation",
            'Close',
            {
              verticalPosition: 'top',
              duration: 3000,
            }
          );
        }
      });
  }

  getPlacesObservable(
    floorId: number,
    dateRange: FormGroup
  ): Observable<Place[]> {
    return this.bookService.getPlaces(
      floorId,
      moment(dateRange.value.start).format(this.dateFormat),
      moment(dateRange.value.end).format(this.dateFormat)
    );
  }

  setPlaces(places): void {
    this.places = places;
  }

  addBooking(): void {
    this.spinner.show('addBookingSpinner');

    this.bookService
      .book(
        this.authService.getCurrentUser().id,
        this.currentPlace.placeId,
        moment(this.dateRange.value.start).format(this.dateFormat),
        moment(this.dateRange.value.end).format(this.dateFormat)
      )
      .subscribe(() => {
        this.snackbar.open('Successful book', 'Close', {
          verticalPosition: 'top',
          panelClass: 'success',
        });

        this.route.navigate(['/my_bookings']);
        this.spinner.hide('addBookingSpinner');
      });
  }

  stopBooking(): void {
    this.snackbar.open('Your booking session ended', 'Close', {
      verticalPosition: 'top',
      duration: 3000,
    });

    this.showTimer = false;
    this.getPlacesObservable(this.currentFloor.id, this.dateRange).subscribe(
      (places) => {
        this.setPlaces(places);
        this.currentPlace = undefined;
      }
    );
  }

  subscribe(): void {
    this.bookService.subscribe(this.currentPlace.placeId).subscribe(() => {
      this.route.navigate(['/my_bookings']);
    });
  }
}
