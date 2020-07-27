import { Office } from './../../models/office';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  formData: Office;

  constructor() {}
}
