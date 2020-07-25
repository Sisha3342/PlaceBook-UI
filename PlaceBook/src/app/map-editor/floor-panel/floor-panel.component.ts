import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FloorConfig } from '../floor-model/floor-config';
import { FloorService } from './floor.service';

@Component({
  selector: 'app-floor-panel',
  templateUrl: './floor-panel.component.html',
  styleUrls: ['./floor-panel.component.scss'],
})
export class FloorPanelComponent implements OnInit {
  @Input() floors;
  @Input() currentFloor;

  @Output() floorsChange = new EventEmitter<FloorConfig[]>();
  @Output() currentFloorChange = new EventEmitter<FloorConfig>();

  initWidth = 10;
  initHeight = 10;

  constructor(private floorService: FloorService) {}

  ngOnInit(): void {}

  addEmptyFloor(): void {
    const newFloor = this.floorService.getNewFloor(
      this.initWidth,
      this.initHeight
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
}
