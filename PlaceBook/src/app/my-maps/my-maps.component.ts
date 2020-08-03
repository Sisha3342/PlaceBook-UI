import { DeleteOfficeAddressComponent } from '././delete-office-address/delete-office-address.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { Office } from '../models/office';
import { OfficeAddress } from '../models/office-address';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsColumnService],
})
export class MyMapsComponent implements OnInit {
  displayedOffices: Office[];

  constructor(
    private mapService: MapService,
    private columnMapService: MyMapsColumnService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setDisplayedOffices({
      country: undefined,
      city: undefined,
      address: undefined,
    });
  }

  deleteOfficeAddress(event: Event, data: Office): void {
    event.stopPropagation();
    this.dialog.open(DeleteOfficeAddressComponent, {
      width: '30rem',
      data: data,
    });
  }

  setDisplayedOffices(officeAddress: OfficeAddress): void {
    this.mapService
      .getOffices(officeAddress)
      .subscribe((offices) => (this.displayedOffices = offices));
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }
}
