import { Injectable } from '@angular/core';
import { MapObject } from './model/map-object';
import {
  CompactType,
  DisplayGrid,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { MapComponent } from './map/map.component';
import { Safe } from './model/safe';

@Injectable({
  providedIn: 'root',
})
export class MapEditorService {
  constructor() {}

  getDefaultOptions(map: MapComponent) {
    return {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      margin: 1,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 0,
      minCols: 10,
      maxCols: 10,
      minRows: 10,
      maxRows: 10,
      maxItemCols: 10,
      minItemCols: 1,
      maxItemRows: 10,
      minItemRows: 1,
      maxItemArea: 100,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: true,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      emptyCellClickCallback: emptyCellClick.bind(map),
      emptyCellContextMenuCallback: emptyCellClick.bind(map),
      emptyCellDropCallback: emptyCellClick.bind(map),
      emptyCellDragCallback: emptyCellClick.bind(map),
      disableScrollHorizontal: true,
      disableScrollVertical: true,
    };
  }

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

  setSize(width: number, height: number, options: Safe): void {
    options.minCols = width;
    options.maxCols = width;
    options.minRows = height;
    options.maxRows = height;

    options.maxItemCols = width;
    options.maxItemRows = height;
    options.maxItemArea = width * height;
  }

  setScope(
    scope: number,
    options: Safe,
    initWidth: number,
    initHeight: number
  ): void {
    options.fixedColWidth = initWidth * scope;
    options.fixedRowHeight = initHeight * scope;
  }
}

function emptyCellClick(event: DragEvent, item: GridsterItem): void {
  item.data = JSON.parse(event.dataTransfer.getData('json')) as MapObject;
  this.dashboard.push(item);
}
