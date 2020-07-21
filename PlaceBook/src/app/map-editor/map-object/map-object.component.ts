import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MapObject } from '../config/map-object';

@Component({
  selector: 'app-map-object',
  templateUrl: './map-object.component.html',
  styleUrls: ['./map-object.component.scss'],
})
export class MapObjectComponent implements OnInit {
  @Input() object: MapObject;

  constructor() {}

  ngOnInit(): void {}

  dragStartHandler(ev: DragEvent): void {
    if (ev.dataTransfer) {
      ev.dataTransfer.setData('json', JSON.stringify(this.object));
    }
  }
}
