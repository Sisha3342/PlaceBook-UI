import { Component, Input, OnInit } from '@angular/core';
import { OBJECTS } from './map-model/objects';
import { FLOORS } from './floor-model/floors';
import { Floor } from '../models/floor';
import { MapEditorService } from './map-editor.service';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit {
  objects = OBJECTS;
  floors = FLOORS;
  officeId = 21;
  currentFloor = this.floors[0];

  constructor(private mapEditorService: MapEditorService) {}

  ngOnInit(): void {}

  save(floors: Floor[]): void {
    this.mapEditorService.saveFloors(this.officeId, floors).subscribe();
  }
}
