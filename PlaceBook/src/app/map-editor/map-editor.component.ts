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

  @ViewChild('floorsGroup') floorsGroup: MatButtonToggleGroup;
  currentFloor = this.floors[0];

  ngOnInit(): void {}

  addEmptyFloor(): void {
    let newFloor: FloorConfig = {
      height: this.initHeight,
      width: this.initWidth,
      dashboard: [],
    };

    this.floors = [...this.floors, newFloor];
    this.currentFloor = newFloor;
  }

  deleteFloor(index: number): void {
    this.floors.splice(index, 1);

    if (this.floors.length === index) {
      this.currentFloor = this.floors[index - 1];
    } else {
      this.currentFloor = this.floors[index];
    }
  }
}
