import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Country {
  value: string;
  view: string;
}

interface City {
  value: string;
  view: string;
}

interface Address {
  value: string;
  view: string;
}

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.scss'],
})
export class AddOfficeComponent {
  countries: Country[] = [
    { value: 'USA', view: 'USA' },
    { value: 'Ukraine-1', view: 'Ukraine' },
    { value: 'Belarus-2', view: 'Belarus' },
  ];

  cities: City[] = [
    { value: 'Minsk-1', view: 'Minsk' },
    { value: 'Brest-1', view: 'Brest' },
    { value: 'Moscow-2', view: 'Moscow' },
  ];

  addresses: Address[] = [
    { value: 'Kuprevicha, 3-1', view: 'Kuprevicha, 3' },
    { value: 'DownStreet-1', view: 'DownStreet' },
    { value: 'PicadillyStreet-2', view: 'PicadillyStreet' },
  ];

  constructor(public dialogRef: MatDialogRef<AddOfficeComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
