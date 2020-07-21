import { Injectable } from '@angular/core';
import { MapObject } from './config/map-object';
import { GridsterItem } from 'angular-gridster2';

@Injectable({
  providedIn: 'root',
})
export class MapEditorService {
  constructor() {}

  dragStart(event: DragEvent, object: MapObject): void {
    if (event.dataTransfer) {
      event.dataTransfer.setData('json', JSON.stringify(object));
    }
  }

  remove(
    $event: MouseEvent | TouchEvent,
    item: GridsterItem,
    dashboard: Array<GridsterItem>
  ): void {
    $event.preventDefault();
    $event.stopPropagation();
    dashboard.splice(dashboard.indexOf(item), 1);
  }
}

export function emptyCellClick(event: DragEvent, item: GridsterItem): void {
  item.data = JSON.parse(event.dataTransfer.getData('json')) as MapObject;
  this.dashboard.push(item);
}
