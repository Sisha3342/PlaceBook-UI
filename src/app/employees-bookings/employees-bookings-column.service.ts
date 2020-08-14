import { Injectable } from '@angular/core';
import { Column, ColumnId } from '../models/column';
import { Status } from '../models/Status';

@Injectable({
  providedIn: 'root',
})
export class EmployeesBookingsColumnService {
  status = Status;

  constructor() {}

  columns: Column[] = [
    {
      id: ColumnId.placeNumber,
      label: 'Place No.',
      field: 'placeNumber',
      type: 'booking',
    },
    {
      id: ColumnId.userPhoto,
      label: 'Photo',
      field: 'photoUrl',
      type: 'logo',
      disableSorting: true,
    },
    {
      id: ColumnId.userName,
      label: 'First Name',
      field: 'userName',
      type: 'text',
    },
    {
      id: ColumnId.userSurname,
      label: 'Last Name',
      field: 'userSurname',
      type: 'text',
    },
    {
      id: ColumnId.dateStart,
      label: 'Date start',
      field: 'timeStart',
      type: 'date',
    },
    {
      id: ColumnId.dateEnd,
      label: 'Date end',
      field: 'timeEnd',
      type: 'date',
    },
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
    disableSorting: true,
  };

  getColumns(status: string): Column[] {
    const columns = [...this.columns];

    if (status === this.status.active) {
      columns.push(this.cancelColumn);
    }

    return columns;
  }
}
