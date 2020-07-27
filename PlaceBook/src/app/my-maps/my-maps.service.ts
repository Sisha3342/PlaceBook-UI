import { Injectable } from '@angular/core';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class MyMapsService {
  constructor() {}

  columns: Column[] = [
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

  cancelColumn = {
    id: 'cancelButton',
    type: 'cancel',
    width: '3rem',
    tooltip: 'Delete map',
  };

  editColumn = {
    id: 'editButton',
    type: 'edit',
    width: '7rem',
    tooltip: 'Edit map',
  };

  getColumns(): Column[] {
    const columns = [...this.columns];
    columns.push(this.editColumn);
    columns.push(this.cancelColumn);
    return columns;
  }
}
