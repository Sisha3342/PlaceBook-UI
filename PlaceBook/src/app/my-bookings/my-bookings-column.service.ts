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
      field: 'placeNumber',
      type: 'place',
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
      field: 'address.country',
    },
    {
      id: 'city',
      label: 'City',
      field: 'address.city',
    },
    {
      id: 'address',
      label: 'Address',
      field: 'address.address',
    },
  ];

  cancelColumn = {
    id: 'cancelButton',
    type: 'cancel',
    tooltip: 'Cancel booking',
  };

  rateColumn = {
    id: 'rateButton',
    type: 'rate',
    tooltip: 'Rate booking',
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
