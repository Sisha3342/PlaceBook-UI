import { Injectable } from '@angular/core';
import { Column } from '../models/column';
import { STATUS } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class EmployeesBookingsColumnService {
  status = STATUS;

  constructor() {}

  columns: Column[] = [
    {
      id: 'place',
      label: 'Place No.',
      field: 'placeNumber',
      type: 'booking',
    },
    {
      id: 'logo',
      label: 'Photo',
      field: 'photoUrl',
      type: 'logo',
    },
    {
      id: 'name',
      label: 'firstName',
      field: 'userName',
      type: 'text',
    },
    {
      id: 'surname',
      label: 'lastName',
      field: 'userSurname',
      type: 'text',
    },
    {
      id: 'dateStart',
      label: 'Date start',
      field: 'timeStart',
      type: 'date',
    },
    {
      id: 'dateEnd',
      label: 'Date end',
      field: 'timeEnd',
      type: 'date',
    },
    {
      id: 'country',
      label: 'Country',
      field: 'country',
      type: 'address',
    },
    {
      id: 'city',
      label: 'City',
      field: 'city',
      type: 'address',
    },
    {
      id: 'address',
      label: 'Address',
      field: 'address',
      type: 'address',
    },
  ];

  cancelColumn = {
    id: 'cancelButton',
    type: 'cancel',
  };

  getColumns(status: string): Column[] {
    const columns = [...this.columns];

    if (status === this.status.active) {
      columns.push(this.cancelColumn);
    }

    return columns;
  }
}
