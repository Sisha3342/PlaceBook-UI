import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MapObject } from '../../map-model/map-object';
import { MapConfigurationService } from '../../map/map-configuration.service';
import { Place } from '../../../../models/place';
import { MapObjectService } from './map-object.service';

@Component({
  selector: 'app-map-object',
  templateUrl: './map-object.component.html',
  styleUrls: ['./map-object.component.scss'],
})
export class MapObjectComponent implements OnInit, OnChanges {
  @Input() object: MapObject;
  @Input() isOnMap;
  @Input() zoom: number;
  @Input() isEditMode = false;
  menuOpened = false;
  @Input() selected;

  @Input() neighborPlaces: Place[];
  place: Place;

  constructor(
    public editorService: MapConfigurationService,
    public mapObjectService: MapObjectService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.place = this.mapObjectService.findPlace(
      this.neighborPlaces,
      this.object.number
    );
  }

  getFontSize(): number {
    return this.zoom > 0.25 ? 1.2 * this.zoom : 0;
  }
}
