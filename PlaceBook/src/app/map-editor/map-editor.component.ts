import { Component, OnInit, ViewChild } from '@angular/core';
import { OBJECTS } from './model/objects';
import { FLOORS } from './floor-model/floors';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FloorConfig } from './floor-model/floor-config';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit {
  objects = OBJECTS;
  floors = FLOORS;

  initWidth = 10;
  initHeight = 10;

  @ViewChild('floorsGroup') floorsGrp: MatButtonToggleGroup;

  ngOnInit(): void {}

  addEmptyFloor() {
    let newFloor: FloorConfig = {
      height: this.initHeight,
      width: this.initWidth,
      dashboard: [],
    };

    this.floors = [...this.floors, newFloor];

    this.floorsGrp.writeValue(newFloor);
  }
}
