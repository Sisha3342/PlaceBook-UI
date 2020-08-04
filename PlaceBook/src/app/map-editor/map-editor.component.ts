import { Component, OnInit } from '@angular/core';
import { OBJECTS } from './map-model/objects';
import { Floor } from '../models/floor';
import { MapEditorService } from './map-editor.service';
import { FloorsConverterService } from './floor-converter/floors-converter.service';
import { ActivatedRoute } from '@angular/router';
import { FloorService } from './floor-panel/floor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RestoreDialogComponent } from './restore-dialog/restore-dialog.component';

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
  fromLocalStorage: boolean;

  constructor(
    private mapEditorService: MapEditorService,
    private floorConverter: FloorsConverterService,
    private route: ActivatedRoute,
    private floorService: FloorService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.officeId = params.officeId;

      if (localStorage.getItem(`floorsConfig_${this.officeId}`)) {
        this.openDialog();
      } else {
        this.setFloors(this.officeId);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RestoreDialogComponent, {
      width: '25rem',
    });

    dialogRef.afterClosed().subscribe((flag) => {
      console.log(flag);

      if (flag) {
        this.floors = JSON.parse(
          localStorage.getItem(`floorsConfig_${this.officeId}`)
        );
        this.currentFloor = this.floors[0];
      } else {
        this.setFloors(this.officeId);
        localStorage.removeItem(`floorsConfig_${this.officeId}`);
      }
    });
  }

  setFloors(officeId: number): void {
    this.mapEditorService.getFloors(officeId).subscribe((floors) => {
      this.floors = floors.map<Floor>((floor) =>
        this.floorConverter.convertFromRequest(floor)
      );

      if (!floors.length) {
        this.floors = [this.floorService.getNewFloor(10, 10, 1)];
      }

      this.currentFloor = this.floors[0];
    });
  }

  save(floors: Floor[]): void {
    this.mapEditorService.saveFloors(this.officeId, floors).subscribe(() => {
      this.snackbar.open('Map was saved', 'Close', {
        verticalPosition: 'top',
        panelClass: 'success',
      });

      localStorage.removeItem(`floorsConfig_${this.officeId}`);
    });
  }

  saveLatestChanges(): void {
    this.mapEditorService.saveChanges(this.floors, this.officeId);
  }
}
