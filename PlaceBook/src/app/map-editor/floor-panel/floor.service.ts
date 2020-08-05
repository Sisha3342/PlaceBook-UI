import { Injectable } from '@angular/core';
import { Floor } from '../../models/floor';

@Injectable({
  providedIn: 'root',
})
export class FloorService {
  constructor() {}

  delete(floors: Floor[], index: number): void {
    floors.splice(index, 1);
  }

  getNewFloor(width: number, height: number, floorNumber: number): Floor {
    return {
      floorNumber,
      height,
      width,
      dashboard: [],
    };
  }

  resetFloorNumbers(floors: Floor[]): void {
    for (let i = 0; i < floors.length; i++) {
      floors[i].floorNumber = i + 1;
    }
  }
}
