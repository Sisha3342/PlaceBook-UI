import { Component, Input, OnInit } from '@angular/core';
import { Floor } from '../models/floor';

@Component({
  selector: 'app-map-booking',
  templateUrl: './map-booking.component.html',
  styleUrls: ['./map-booking.component.scss'],
})
export class MapBookingComponent implements OnInit {
  @Input() currentFloor: Floor;

  constructor() {}

  ngOnInit(): void {}
}
