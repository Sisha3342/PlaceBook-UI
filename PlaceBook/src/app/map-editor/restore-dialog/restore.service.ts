import { Injectable } from '@angular/core';
import { Floor } from '../../models/floor';

@Injectable({
  providedIn: 'root',
})
export class RestoreService {
  constructor() {}

  getFloors(officeId: number): Floor[] {
    return JSON.parse(localStorage.getItem(this.getKey(officeId)));
  }

  deleteFloors(officeId: number): void {
    localStorage.removeItem(this.getKey(officeId));
  }

  getKey(officeId: number): string {
    return `floorsConfig_${officeId}`;
  }

  saveChanges(floors: Floor[], officeId: number): void {
    localStorage.setItem(this.getKey(officeId), JSON.stringify(floors));
  }
}
