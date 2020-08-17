import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Place } from '../../../models/place';
import { BookingMark } from '../../../models/booking-mark';
import { PlaceInfoService } from './place-info.service';
import { PlaceCurrentBooking } from '../../../models/place-current-booking';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss'],
})
export class PlaceInfoComponent implements OnChanges {
  headers = ['date', 'name'];
  @Input() place: Place;
  @Input() dateRange: FormGroup;
  placeRating: BookingMark;
  currentBookings: PlaceCurrentBooking[];
  dateFormat = 'YYYY-MM-DD[T]HH:mm:ss';

  constructor(
    private placeService: PlaceInfoService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.spinner.show('placeInfoSpinner');

    const bookingsInfo = this.placeService.getCurrentBookings(
      this.place.placeId,
      moment(this.dateRange.value.start).format(this.dateFormat),
      moment(this.dateRange.value.end).format(this.dateFormat)
    );
    const placesInfo = this.placeService.getPlaceRating(this.place.placeId);

    forkJoin([bookingsInfo, placesInfo]).subscribe((result) => {
      this.currentBookings = result[0];
      this.placeRating = result[1];
      this.spinner.hide('placeInfoSpinner');
    });
  }
}
