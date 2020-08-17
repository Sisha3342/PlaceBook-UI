import { Injectable } from '@angular/core';
import { Floor } from '../../../models/floor';

@Injectable({
  providedIn: 'root',
})
export class RestoreService {
  constructor() {}

  getOffice(officeId: number): Floor[] {
    return JSON.parse(localStorage.getItem(this.getKey(officeId)));
  }

  deleteOffice(officeId: number): void {
    localStorage.removeItem(this.getKey(officeId));
  }

  getKey(officeId: number): string {
    return `floorsConfig_${officeId}`;
  }

  saveOffice(floors: Floor[], officeId: number): void {
    localStorage.setItem(this.getKey(officeId), JSON.stringify(floors));
  }
}
