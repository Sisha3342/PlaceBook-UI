import { DeleteOfficeAddressComponent } from './delete-office-address/delete-office-address.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { Office } from '../models/office';
import { OfficeAddress } from '../models/office-address';
import { EditMapAddressComponent } from './map-address-modal/map-address-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

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
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.setDisplayedOffices({
      country: undefined,
      city: undefined,
      address: undefined,
    });
  }

  editOfficeAddress(data: Office): void {
    this.spinner.show('officesTableSpinner');

    const dialogRef = this.dialog.open(EditMapAddressComponent, {
      width: '30rem',
      data,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.setDisplayedOffices({
        country: undefined,
        city: undefined,
        address: undefined,
      });
      this.spinner.hide('officesTableSpinner');
    });
  }

  editMap(office: Office): void {
    this.route.navigate(['editor', { officeId: office.id.toString() }]);
  }

  deleteOfficeAddress(data: Office): void {
    this.spinner.show('officesTableSpinner');
    const dialogRef = this.dialog.open(DeleteOfficeAddressComponent, { data });

    dialogRef.afterClosed().subscribe(() => {
      this.setDisplayedOffices({
        country: undefined,
        city: undefined,
        address: undefined,
      });
      this.spinner.hide('officesTableSpinner');
    });
  }

  setDisplayedOffices(officeAddress: OfficeAddress): void {
    this.spinner.show('officesTableSpinner');
    this.mapService.getOffices(officeAddress).subscribe((offices) => {
      this.displayedOffices = offices;
      this.spinner.hide('officesTableSpinner');
    });
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }
}
