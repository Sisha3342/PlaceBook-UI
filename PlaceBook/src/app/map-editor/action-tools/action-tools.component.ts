import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { MapObject } from '../model/map-object';

@Component({
  selector: 'app-action-tools',
  templateUrl: './action-tools.component.html',
  styleUrls: ['./action-tools.component.scss'],
})
export class ActionToolsComponent implements OnInit {
  @Input() object: MapObject;
  @Output() deleteEvent = new EventEmitter<MouseEvent>();
  @ViewChild('actions') actions: MatMenuPanel;

  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.deleteEvent.emit();
  }
}
