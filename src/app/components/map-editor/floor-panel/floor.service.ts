import { Injectable } from '@angular/core';
import { Floor } from '../../../models/floor';

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

  hasDuplicateNumbers(floorNumber: number, floors: Floor[]): boolean {
    let counter = 0;

    for (const floor of floors) {
      if (+floor.floorNumber === floorNumber) {
        counter += 1;
      }
    }

    return counter === 2;
  }
}
