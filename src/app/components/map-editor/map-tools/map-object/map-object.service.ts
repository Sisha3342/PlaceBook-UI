import { Injectable } from '@angular/core';
import { MapObject } from '../../../../models/map-model/map-object';
import { Type } from '../../../../models/map-model/Type';
import { Place } from '../../../../models/place';

@Injectable({
  providedIn: 'root',
})
export class MapObjectService {
  constructor() {}

  isWorkPlace(object: MapObject): boolean {
    return [Type.desk, Type.meeting, Type.constant].includes(object.type);
  }

  shouldHasBorder(object: MapObject): boolean {
    return [Type.window, Type.door].includes(object.type);
  }

  getBorder(object: MapObject, isOnMap: boolean): any {
    if (object.border && this.shouldHasBorder(object) && isOnMap) {
      return {
        [`border-${object.border}`]: '0.5rem solid var(--primary-color)',
      };
    }

    return {};
  }

  findPlace(places: Place[], placeNumber: string): Place {
    if (placeNumber && places) {
      return places.find((place) => {
        return place.placeNumber === placeNumber;
      });
    }

    return undefined;
  }
}
