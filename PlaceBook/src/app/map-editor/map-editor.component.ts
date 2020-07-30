import { Component, Input, OnInit } from '@angular/core';
import { OBJECTS } from './map-model/objects';
import { FLOORS } from './floor-model/floors';
import { Floor } from '../models/floor';
import { MapEditorService } from './map-editor.service';
import { FloorsConverterService } from './floors-converter.service';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit {
  objects = OBJECTS;
  floors: Floor[];
  officeId = 21;
  currentFloor: Floor;

  constructor(
    private mapEditorService: MapEditorService,
    private floorConverter: FloorsConverterService
  ) {}

  ngOnInit(): void {
    this.mapEditorService.getFloors(this.officeId).subscribe((floors) => {
      this.floors = floors.map<Floor>((floor) =>
        this.floorConverter.convertFromRequest(floor)
      );

      this.currentFloor = this.floors[0];
    });
  }

  save(floors: Floor[]): void {
    this.mapEditorService.saveFloors(this.officeId, floors).subscribe();
  }
}
