import { GridsterItem } from 'angular-gridster2';

export interface Floor {
  id?: number;
  floorNumber: number;
  height: number;
  width: number;
  dashboard: GridsterItem[];
}
