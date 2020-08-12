import { Injectable } from '@angular/core';
import { MapObject } from '../../map-model/map-object';
import { Type } from '../../map-model/Type';

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
}
