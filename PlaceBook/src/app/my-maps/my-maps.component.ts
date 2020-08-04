import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { Office } from '../models/office';
import { OfficeAddress } from '../models/office-address';
import { EditMapAddressComponent } from './map-address-modal/map-address-modal.component';

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

  editOfficeAddress(data: Office): void {
    const dialogRef = this.dialog.open(EditMapAddressComponent, {
      width: '30rem',
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.setDisplayedOffices({
        country: undefined,
        city: undefined,
        address: undefined,
      });
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
