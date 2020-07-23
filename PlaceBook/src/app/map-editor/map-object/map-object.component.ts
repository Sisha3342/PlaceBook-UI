import { Component, Input, OnInit } from '@angular/core';
import { MapObject } from '../model/map-object';
import { MapEditorService } from '../map-editor.service';

@Component({
  selector: 'app-map-object',
  templateUrl: './map-object.component.html',
  styleUrls: ['./map-object.component.scss'],
})
export class MapObjectComponent implements OnInit {
  @Input() object: MapObject;
  @Input() isOnMap;
  menuOpened = false;

  constructor(public editorService: MapEditorService) {}

  ngOnInit(): void {}

  openMenu($event: MouseEvent): void {
    this.menuOpened = !!($event.button === 2 && this.isOnMap);
  }
}
