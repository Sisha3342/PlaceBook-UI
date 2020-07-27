import { Injectable } from '@angular/core';
import { Column } from '../models/column';
import { STATUS } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class MyBookingsColumnService {
  status = STATUS;

  constructor() {}

  columns: Column[] = [
    {
      id: 'place',
      label: 'Place No.',
      field: 'place',
      type: 'place',
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

  cancelColumn = {
    id: 'cancelButton',
    type: 'cancel',
  };

  rateColumn = {
    id: 'rateButton',
    type: 'rate',
  };

  getColumns(status: string): Column[] {
    const columns = [...this.columns];

    if (status === this.status.active) {
      columns.push(this.cancelColumn);
    }

    if (status === this.status.completed) {
      columns.push(this.rateColumn);
    }

    return columns;
  }
}
