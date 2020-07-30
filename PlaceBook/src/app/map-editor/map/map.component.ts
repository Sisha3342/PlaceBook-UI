import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Safe } from '../map-model/safe';
import { Floor } from '../../models/floor';
import { MapObjectComponent } from '../map-tools/map-object/map-object.component';
import { MapConfigurationService } from './map-configuration.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {
  options: Safe = this.editorService.getDefaultOptions(this);
  @Input() config: Floor;
  @Output() configChange = new EventEmitter<Floor>();

  initCellHeight: number;
  initCellWidth: number;
  zoom = 1;

  constructor(private editorService: MapConfigurationService) {
    this.options = this.editorService.getDefaultOptions(this);
  }

  ngOnInit(): void {
    this.initCellWidth = this.options.fixedColWidth;
    this.initCellHeight = this.options.fixedRowHeight;
  }

  ngOnChanges(changes: SimpleChanges): void {
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
}
