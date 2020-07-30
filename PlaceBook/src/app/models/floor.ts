import { GridsterItem } from 'angular-gridster2';

export interface Floor {
  floorNumber: number;
  height: number;
  width: number;
  dashboard: GridsterItem[];
}
