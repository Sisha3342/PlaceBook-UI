import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Place } from '../../models/place';
import { BookingMark } from '../../models/booking-mark';
import { PlaceInfoService } from './place-info.service';
import { PlaceCurrentBooking } from '../../models/place-current-booking';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss'],
})
export class PlaceInfoComponent implements OnInit, OnChanges {
  headers = ['date', 'name'];
  @Input() place: Place;
  @Input() dateRange: FormGroup;
  placeRating: BookingMark;
  currentBookings: PlaceCurrentBooking[];

  constructor(private placeService: PlaceInfoService) {}

  ngOnInit(): void {
    this.placeService
      .getPlaceRating(this.place.placeId)
      .subscribe((rating) => (this.placeRating = rating));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.placeService
      .getCurrentBookings(this.place.placeId, this.dateRange)
      .subscribe((bookings) => (this.currentBookings = bookings));
  }
}
