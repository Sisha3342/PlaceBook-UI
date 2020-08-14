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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsColumnService],
})
export class MyMapsComponent implements OnInit {
  displayedOffices: Office[];
  sortFunction: (
    sortBy?: string,
    order?: string,
    status?: string
  ) => Observable<any>;

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
    this.spinner.show('tableSpinner');

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
      this.spinner.hide('tableSpinner');
    });
  }

  editMap(office: Office): void {
    this.route.navigate(['editor', { officeId: office.id.toString() }]);
  }

  deleteOfficeAddress(data: Office): void {
    this.spinner.show('tableSpinner');
    const dialogRef = this.dialog.open(DeleteOfficeAddressComponent, { data });

    dialogRef.afterClosed().subscribe(() => {
      this.setDisplayedOffices({
        country: undefined,
        city: undefined,
        address: undefined,
      });
      this.spinner.hide('tableSpinner');
    });
  }

  setDisplayedOffices(officeAddress: OfficeAddress): void {
    this.spinner.show('tableSpinner');
    this.mapService.getOffices(officeAddress).subscribe((offices) => {
      this.displayedOffices = offices;
      this.setSortFunction(officeAddress);
      this.spinner.hide('tableSpinner');
    });
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }

  setSortFunction(officeAddress: OfficeAddress): any {
    this.sortFunction = this.mapService.getOffices.bind(
      this.mapService,
      officeAddress
    );
  }
}
