import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapObject } from '../../../models/map-model/map-object';
import { MapObjectService } from '../map-tools/map-object/map-object.service';
import { Border } from '../../../models/map-model/Border';

@Component({
  selector: 'app-action-tools',
  templateUrl: './action-tools.component.html',
  styleUrls: ['./action-tools.component.scss'],
})
export class ActionToolsComponent {
  @Input() object: MapObject;
  @Output() deleteEvent = new EventEmitter<MouseEvent>();
  border = Border;

  constructor(public mapObjectService: MapObjectService) {}

  delete(): void {
    this.deleteEvent.emit();
  }
}
