import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Floor } from '../../../models/floor';
import { FloorService } from './floor.service';

@Component({
  selector: 'app-floor-panel',
  templateUrl: './floor-panel.component.html',
  styleUrls: ['./floor-panel.component.scss'],
})
export class FloorPanelComponent {
  @Input() floors: Floor[];
  @Input() currentFloor: Floor;

  @Output() floorsChange = new EventEmitter<Floor[]>();
  @Output() currentFloorChange = new EventEmitter<Floor>();
  @Output() saveFloors = new EventEmitter<Floor[]>();

  initWidth = 10;
  initHeight = 10;

  constructor(private floorService: FloorService) {}

  addEmptyFloor(): void {
    const newFloor = this.floorService.getNewFloor(
      this.initWidth,
      this.initHeight,
      Math.max.apply(
        null,
        this.floors.map((floor) => floor.floorNumber)
      ) + 1
    );

    this.floors = [...this.floors, newFloor];
    this.changeCurrentFloor(this.floors.length - 1);

    this.floorsChange.emit(this.floors);
  }

  deleteFloor(index: number): void {
    this.floorService.delete(this.floors, index);

    if (this.floors.length === index) {
      this.changeCurrentFloor(index - 1);
    } else {
      this.changeCurrentFloor(index);
    }

    this.floorsChange.emit(this.floors);
  }

  changeCurrentFloor(index: number): void {
    this.currentFloor = this.floors[index];

    this.currentFloorChange.emit(this.currentFloor);
  }

  save(): void {
    this.saveFloors.emit(this.floors);
  }
}
