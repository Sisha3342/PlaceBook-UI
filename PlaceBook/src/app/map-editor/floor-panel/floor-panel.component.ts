import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FloorConfig } from '../floor-model/floor-config';

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

  constructor() {}

  ngOnInit(): void {}

  addEmptyFloor(): void {
    let newFloor: FloorConfig = {
      height: this.initHeight,
      width: this.initWidth,
      dashboard: [],
    };

    this.floors = [...this.floors, newFloor];
    this.currentFloor = newFloor;

    this.floorsChange.emit(this.floors);
    this.currentFloorChange.emit(this.currentFloor);
  }

  deleteFloor(index: number): void {
    this.floors.splice(index, 1);

    if (this.floors.length === index) {
      this.currentFloor = this.floors[index - 1];
    } else {
      this.currentFloor = this.floors[index];
    }

    this.floorsChange.emit(this.floors);
    this.currentFloorChange.emit(this.currentFloor);
  }
}
