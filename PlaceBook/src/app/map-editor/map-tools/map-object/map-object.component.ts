import { Component, Input, OnInit } from '@angular/core';
import { MapObject } from '../../map-model/map-object';
import { MapConfigurationService } from '../../map/map-configuration.service';

@Component({
  selector: 'app-map-object',
  templateUrl: './map-object.component.html',
  styleUrls: ['./map-object.component.scss'],
})
export class MapObjectComponent implements OnInit {
  @Input() object: MapObject;
  @Input() isOnMap;
  @Input() zoom: number;
  menuOpened = false;

  constructor(public editorService: MapConfigurationService) {}

  ngOnInit(): void {}

  getFontSize(): number {
    return this.zoom > 0.25 ? 1.2 * this.zoom : 0;
  }
}
