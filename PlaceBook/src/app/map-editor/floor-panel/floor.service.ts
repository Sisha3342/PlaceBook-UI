import { Injectable } from '@angular/core';
import { FloorConfig } from '../floor-model/floor-config';

@Injectable({
  providedIn: 'root',
})
export class FloorService {
  constructor() {}

  delete(floors: FloorConfig[], index: number): void {
    floors.splice(index, 1);
  }

  getNewFloor(width: number, height: number): FloorConfig {
    return {
      height: height,
      width: width,
      dashboard: [],
    };
  }
}
