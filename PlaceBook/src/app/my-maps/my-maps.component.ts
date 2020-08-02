import { Office } from './../models/office';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { OfficeAddress } from '../models/office-address';
import { EditMapAddressModalComponent } from './edit-map-address-modal/edit-map-address-modal.component';
import { DeleteMapAddressModalComponent } from './delete-map-address-modal/delete-map-address-modal.component';

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

  editOfficeAddress(event: Event, element: Office): void {
    this.dialog.open(EditMapAddressModalComponent, {
      width: '30rem',
      data: element,
    });
  }

  deleteOfficeAddress(event: Event, element: Office): void {
    this.dialog.open(DeleteMapAddressModalComponent, {
      width: '30rem',
      data: element,
    });
  }

  setDisplayedOffices(officeAddress: OfficeAddress): void {
    this.mapService
      .getAllOffices(officeAddress)
      .subscribe((offices) => (this.displayedOffices = offices));
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }
}
