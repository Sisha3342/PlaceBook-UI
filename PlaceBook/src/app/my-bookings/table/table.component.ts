import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  place: string;
  date: string;
  country: string;
  city: string;
  address: string;
  // status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '121K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3'},
  // {place: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {place: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {place: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['place', 'date', 'country', 'city', 'address', 'delete-button'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
