import { Injectable } from '@angular/core';
import { FloorRequestConfig } from '../models/floor-request-config';
import { Floor } from '../models/floor';

@Injectable({
  providedIn: 'root',
})
export class FloorsConverterService {
  constructor() {}

  convertToRequest(floor: Floor): FloorRequestConfig {
    return {
      floorNumber: floor.floorNumber,
      height: floor.height,
      width: floor.width,
      dashboard: JSON.stringify(floor.dashboard),
    };
  }

  convertFromRequest(floorRequest: FloorRequestConfig): Floor {
    return {
      floorNumber: floorRequest.floorNumber,
      height: floorRequest.height,
      width: floorRequest.width,
      dashboard: JSON.parse(floorRequest.dashboard),
    };
  }
}
