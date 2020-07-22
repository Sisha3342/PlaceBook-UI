import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterComponent, GridsterItem } from 'angular-gridster2';
import { MapEditorService } from '../map-editor.service';
import { Safe } from '../model/safe';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  options: Safe;
  dashboard: Array<GridsterItem>;
  @ViewChild(GridsterComponent) private grid: GridsterComponent;

  initCellHeight: number;
  initCellWidth: number;

  constructor(private editorService: MapEditorService) {}

  ngOnInit(): void {
    this.options = this.editorService.getDefaultOptions(this);

    this.initCellWidth = this.options.fixedColWidth;
    this.initCellHeight = this.options.fixedRowHeight;

    this.dashboard = [];
  }

  changeScope(scope: number): void {
    this.editorService.setScope(
      scope,
      this.options,
      this.initCellWidth,
      this.initCellHeight
    );
    this.options.api.optionsChanged();
  }
}
