import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MapObject } from '../../map-model/map-object';
import { MapConfigurationService } from '../../map/map-configuration.service';
import { Place } from '../../../models/place';

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

  constructor(public editorService: MapConfigurationService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.place = this.findPlace(this.neighborPlaces, this.object.number);
  }

  findPlace(places: Place[], placeNumber: number): Place {
    if (!(placeNumber === undefined || places === undefined)) {
      return places.find((place) => {
        return place.placeNumber === placeNumber;
      });
    }

    return undefined;
  }

  getFontSize(): number {
    return this.zoom > 0.25 ? 1.2 * this.zoom : 0;
  }
}
