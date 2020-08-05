import { DeleteOfficeAddressComponent } from '././delete-office-address/delete-office-address.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { MyMapsColumnService } from './my-maps-column.service';
import { MapService } from './map.service';
import { Office } from '../models/office';
import { OfficeAddress } from '../models/office-address';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss'],
  providers: [MyMapsColumnService],
})
export class MyMapsComponent implements OnInit {
  displayedOffices: Office[];
  showSpinner = true;

  constructor(
    private mapService: MapService,
    private columnMapService: MyMapsColumnService,
    public dialog: MatDialog,
    private route: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.setDisplayedOffices({
      country: undefined,
      city: undefined,
      address: undefined,
    });
  }

  deleteOfficeAddress(data: Office): void {
    this.spinner.show('deleteSpinner');
    const dialogRef = this.dialog.open(DeleteOfficeAddressComponent, {
      width: '30rem',
      data: data,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.setDisplayedOffices({
        country: undefined,
        city: undefined,
        address: undefined,
      });
      this.spinner.hide('deleteSpinner');
    });
  }

  setDisplayedOffices(officeAddress?: OfficeAddress): void {
    this.spinner.show('officesTableSpinner');
    this.mapService.getOffices(officeAddress).subscribe((offices) => {
      this.displayedOffices = offices;
      this.spinner.hide('officesTableSpinner');
    });
  }

  getColumns(): Column[] {
    return this.columnMapService.getColumns();
  }

  editMap(office: Office): void {
    this.route.navigate(['editor', { officeId: office.id.toString() }]);
  }
}
