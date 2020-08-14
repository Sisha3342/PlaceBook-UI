import { Injectable } from '@angular/core';
import { Column, ColumnId } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class MyMapsColumnService {
  constructor() {}

  columns: Column[] = [
    {
      id: ColumnId.country,
      label: 'Country',
      field: 'country',
      type: 'address',
    },
    {
      id: ColumnId.city,
      label: 'City',
      field: 'city',
      type: 'address',
    },
    {
      id: ColumnId.office,
      label: 'Address',
      field: 'address',
      type: 'address',
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
