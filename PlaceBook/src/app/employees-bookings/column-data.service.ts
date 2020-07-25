import { Injectable } from '@angular/core';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class ColumnDataService {
  constructor() {}

  columns: Column[] = [
    {
      id: 'place',
      label: 'Place No.',
      field: 'place',
      type: 'place',
    },
    {
      id: 'logo',
      label: 'Photo',
      field: 'logo',
      type: 'logo',
    },
    {
      id: 'name',
      label: 'Employee',
      field: 'name',
      type: 'text',
    },
    {
      id: 'date',
      label: 'Date',
      field: 'date',
      type: 'text',
    },
    {
      id: 'country',
      label: 'Country',
      field: 'country',
      type: 'text',
    },
    {
      id: 'city',
      label: 'City',
      field: 'city',
      type: 'text',
    },
    {
      id: 'address',
      label: 'Address',
      field: 'address',
      type: 'text',
    },
  ];

  // tslint:disable-next-line:typedef
  getColumns() {
    return this.columns;
  }
}
