import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Safe } from '../../../models/map-model/safe';
import { Floor } from '../../../models/floor';
import { MapObjectComponent } from '../map-tools/map-object/map-object.component';
import { MapConfigurationService } from './map-configuration.service';
import { Place } from '../../../models/place';
import { MapObject } from '../../../models/map-model/map-object';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {
  @Input() config: Floor;
  options: Safe = this.editorService.getDefaultOptions(this);
  initCellHeight: number;
  initCellWidth: number;
  zoom = 1;

  @Input() edit: boolean;
  @Input() places: Place[];
  @Output() configChange = new EventEmitter<Floor>();
  @Output() showPlaceInfo = new EventEmitter<Place>();
  @Input() selectedPlace: Place;

  constructor(private editorService: MapConfigurationService) {}

  ngOnInit(): void {
    this.initCellWidth = this.options.fixedColWidth;
    this.initCellHeight = this.options.fixedRowHeight;
    this.editorService.setHeight(this.config.height, this.options);
    this.editorService.setWidth(this.config.width, this.options);

    if (!this.edit) {
      this.options.enableEmptyCellDrop = false;
      this.options.draggable = { enabled: false };
      this.options.resizable = { enabled: false };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.config && !this.edit) {
      this.config = {
        floorNumber: 0,
        width: 10,
        height: 10,
        dashboard: [],
      };
    }
    if (this.options.api) {
      this.changeHeight(this.config.height);
      this.changeWidth(this.config.width);
    }
  }

  changeScope(zoom: number): void {
    this.zoom = zoom;

    this.editorService.setScope(
      zoom,
      this.options,
      this.initCellWidth,
      this.initCellHeight
    );
    this.options.api.optionsChanged();
  }

  changeHeight(height: number): void {
    this.editorService.setHeight(height, this.options);
    this.options.api.optionsChanged();
    this.configChange.emit(this.config);
  }

  changeWidth(width: number): void {
    this.editorService.setWidth(width, this.options);
    this.options.api.optionsChanged();
    this.configChange.emit(this.config);
  }

  remove(item: GridsterItem): void {
    this.editorService.remove(item, this.config.dashboard);

    this.configChange.emit(this.config);
  }

  openMenu(object: MapObjectComponent): boolean {
    object.menuOpened = true;
    return false;
  }

  closeMenu(object: MapObjectComponent): void {
    object.menuOpened = false;
    this.configChange.emit(this.config);
  }

  getPlaceInfo(object: MapObjectComponent): void {
    if (!this.edit && object.object.active && object.place) {
      this.showPlaceInfo.emit(object.place);
    }
  }
}
