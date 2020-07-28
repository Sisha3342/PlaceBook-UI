import { Injectable } from '@angular/core';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class MyMapsColumnService {
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
    width: '5%',
    tooltip: 'Delete map',
  };

  editAddressColumn = {
    id: 'editAddressButton',
    type: 'editAddress',
    width: '5%',
    tooltip: 'Edit address',
  };

  editMapColumn = {
    id: 'editMapButton',
    type: 'editMap',
    width: '5%',
    tooltip: 'Edit map',
  };

  getColumns(): Column[] {
    const columns = [...this.columns];
    columns.push(this.editAddressColumn);
    columns.push(this.editMapColumn);
    columns.push(this.cancelColumn);
    return columns;
  }
}
