import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MapObject } from '../map-model/map-object';
import { BORDER } from '../map-model/BORDER';

@Component({
  selector: 'app-action-tools',
  templateUrl: './action-tools.component.html',
  styleUrls: ['./action-tools.component.scss'],
})
export class ActionToolsComponent implements OnInit {
  @Input() object: MapObject;
  @Output() deleteEvent = new EventEmitter<MouseEvent>();
  border = BORDER;

  constructor() {}

  ngOnInit(): void {}

  delete(): void {
    this.deleteEvent.emit();
  }

  shouldHasBorder(): boolean {
    return ['window', 'door'].includes(this.object.type);
  }
}
