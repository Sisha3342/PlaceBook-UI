import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Floor } from '../../models/floor';
import { Place } from '../../models/place';

@Component({
  selector: 'app-map-booking',
  templateUrl: './map-booking.component.html',
  styleUrls: ['./map-booking.component.scss'],
})
export class MapBookingComponent implements OnInit {
  @Input() currentFloor: Floor;
  @Input() currentPlace: Place;
  @Output() showPlaceInfo = new EventEmitter<Place>();
  @Input() places: Place[];

  constructor() {}

  ngOnInit(): void {}

  getPlaceInfo(place: Place): void {
    this.showPlaceInfo.emit(place);
  }
}
