import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap, debounceTime } from 'rxjs/operators';

import { AppMaterialModule } from './../app-material/app-material.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'hhh78'];

  filteredUsers: Observable<string[]>;

  @Output()
  searchClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.filteredUsers = this.myControl.valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      map((value) => this.filter(value))
    );
  }

  // this.filteredUsers = this.usersForm
  // .get('userInput')
  // .valueChanges
  // .pipe(
  //   debounceTime(300),
  //   switchMap(value => this.appService.search({name: value}, 1))
  //  );

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // onClick(): void {
  //   this.searchClicked.emit(this.myControl.value);
  // }
}
