import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Floor } from '../../models/floor';
import { Place } from '../../models/place';

@Component({
  selector: 'app-map-booking',
  templateUrl: './map-booking.component.html',
  styleUrls: ['./map-booking.component.scss'],
})
export class MapBookingComponent {
  @Input() currentFloor: Floor;
  @Input() currentPlace: Place;
  @Output() showPlaceInfo = new EventEmitter<Place>();
  @Input() places: Place[];

  constructor() {}

  getPlaceInfo(place: Place): void {
    this.showPlaceInfo.emit(place);
  }
}
