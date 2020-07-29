import { Component, Input, OnInit } from '@angular/core';
import { OBJECTS } from './map-model/objects';
import { FLOORS } from './floor-model/floors';
import { Floor } from '../models/floor';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit {
  objects = OBJECTS;
  floors = FLOORS;
  @Input() officeId: number;
  currentFloor = this.floors[0];

  constructor() {
    this.officeId = 21;
  }

  ngOnInit(): void {}

  save(floors: Floor[]): void {}
}
