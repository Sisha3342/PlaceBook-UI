import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Floor } from '../models/floor';
import { MapObject } from '../map-editor/map-model/map-object';

@Component({
  selector: 'app-map-booking',
  templateUrl: './map-booking.component.html',
  styleUrls: ['./map-booking.component.scss'],
})
export class MapBookingComponent implements OnInit {
  @Input() currentFloor: Floor;
  @Output() showPlaceInfo = new EventEmitter<MapObject>();

  constructor() {}

  ngOnInit(): void {}

  getPlaceInfo(item: MapObject): void {
    this.showPlaceInfo.emit(item);
  }
}
