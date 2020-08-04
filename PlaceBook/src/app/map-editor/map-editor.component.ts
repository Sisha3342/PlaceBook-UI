import { Component, OnInit } from '@angular/core';
import { OBJECTS } from './map-model/objects';
import { Floor } from '../models/floor';
import { MapEditorService } from './map-editor.service';
import { FloorsConverterService } from './floors-converter.service';
import { ActivatedRoute } from '@angular/router';
import { FloorService } from './floor-panel/floor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit {
  objects = OBJECTS;
  floors: Floor[];
  officeId: number;
  currentFloor: Floor;

  constructor(
    private mapEditorService: MapEditorService,
    private floorConverter: FloorsConverterService,
    private route: ActivatedRoute,
    private floorService: FloorService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.officeId = params.officeId;

      this.mapEditorService.getFloors(this.officeId).subscribe((floors) => {
        this.floors = floors.map<Floor>((floor) =>
          this.floorConverter.convertFromRequest(floor)
        );

        if (!floors.length) {
          this.floors = [this.floorService.getNewFloor(10, 10, 1)];
        }

        this.currentFloor = this.floors[0];
      });
    });
  }

  save(floors: Floor[]): void {
    this.mapEditorService.saveFloors(this.officeId, floors).subscribe(() => {
      this.snackbar.open('Map was saved', 'Close', {
        verticalPosition: 'top',
        panelClass: 'success',
      });

      localStorage.removeItem('floorsConfig');
    });
  }

  saveLatestChanges(): void {
    this.mapEditorService.saveChanges(this.floors);
  }
}
