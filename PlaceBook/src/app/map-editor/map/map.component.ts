import { Component, OnInit } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
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

  initCellHeight: number;
  initCellWidth: number;

  constructor(public editorService: MapEditorService) {}

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
