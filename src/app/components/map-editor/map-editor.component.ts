import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OBJECTS } from '../../models/map-model/objects';
import { Floor } from '../../models/floor';
import { MapEditorService } from './map-editor.service';
import { FloorsConverterService } from './floor-converter/floors-converter.service';
import { ActivatedRoute } from '@angular/router';
import { FloorService } from './floor-panel/floor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RestoreDialogComponent } from './restore-dialog/restore-dialog.component';
import { RestoreService } from './restore-dialog/restore.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MapComponent } from './map/map.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit, AfterViewInit {
  objects = OBJECTS;
  floors: Floor[];
  officeId: number;
  currentFloor: Floor;

  @ViewChild(MapComponent) map: MapComponent;

  constructor(
    private mapEditorService: MapEditorService,
    private restoreService: RestoreService,
    private floorConverter: FloorsConverterService,
    private route: ActivatedRoute,
    private floorService: FloorService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show('mainOfficeSpinner');
    this.route.params.subscribe((params) => {
      this.officeId = params.officeId;

      if (this.restoreService.getOffice(this.officeId)) {
        this.openDialog();
      } else {
        this.setFloors(this.officeId);
      }

      this.spinner.hide('mainOfficeSpinner');
    });
  }

  ngAfterViewInit(): void {}

  openDialog(): void {
    this.spinner.show('officeSpinner');
    const dialogRef = this.dialog.open(RestoreDialogComponent, {
      width: '25rem',
    });

    dialogRef.afterClosed().subscribe((flag) => {
      if (flag) {
        this.floors = this.restoreService.getOffice(this.officeId);
        this.currentFloor = this.floors[0];
      } else {
        this.setFloors(this.officeId);

        this.restoreService.deleteOffice(this.officeId);
      }
    });
  }

  setFloors(officeId: number): void {
    this.spinner.show('mapSpinner');
    this.mapEditorService.getFloors(officeId).subscribe((floors) => {
      this.floors = floors.map<Floor>((floor) =>
        this.floorConverter.convertFromRequest(floor)
      );

      if (!floors.length) {
        this.floors = [this.floorService.getNewFloor(10, 10, 1)];
      }

      this.currentFloor = this.floors[0];
      this.spinner.hide('mapSpinner');
    });
  }

  save(floors: Floor[]): void {
    this.spinner.show('saveMapSpinner');
    this.mapEditorService.saveFloors(this.officeId, floors).subscribe(
      () => {
        this.snackbar.open('Map was saved', 'Close', {
          verticalPosition: 'top',
          panelClass: 'success',
          duration: 3000,
        });

        this.restoreService.deleteOffice(this.officeId);
        this.spinner.hide('saveMapSpinner');
      },
      (error: HttpErrorResponse) => {
        const message =
          error.error.message[0].toUpperCase() + error.error.message.slice(1);

        this.snackbar.open(message, 'Close', {
          verticalPosition: 'top',
          duration: 3000,
        });

        this.spinner.hide('saveMapSpinner');
      }
    );
  }

  saveLatestChanges(): void {
    this.restoreService.saveOffice(this.floors, this.officeId);
  }
}
