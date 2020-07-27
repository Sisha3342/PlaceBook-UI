import { Component, OnInit, ViewChild } from '@angular/core';
import { OBJECTS } from './map-model/objects';
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

  currentFloor = this.floors[0];

  ngOnInit(): void {}
}
