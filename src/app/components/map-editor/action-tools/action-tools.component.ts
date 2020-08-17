import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MapObject } from '../map-model/map-object';
import { MapObjectService } from '../map-tools/map-object/map-object.service';
import { Border } from '../map-model/Border';

@Component({
  selector: 'app-action-tools',
  templateUrl: './action-tools.component.html',
  styleUrls: ['./action-tools.component.scss'],
})
export class ActionToolsComponent implements OnInit {
  @Input() object: MapObject;
  @Output() deleteEvent = new EventEmitter<MouseEvent>();
  border = Border;

  constructor(public mapObjectService: MapObjectService) {}

  ngOnInit(): void {}

  delete(): void {
    this.deleteEvent.emit();
  }
}
