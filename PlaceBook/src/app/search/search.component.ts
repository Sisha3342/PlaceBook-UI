import { SearchService } from './search.service';
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

  filteredUsers: Observable<string[]>;

  @Output()
  typeText = new EventEmitter<string>();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.filteredUsers = this.myControl.valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      map((value) => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchService.autocompleteUsers(value);
  }

  onType(): void {
    this.typeText.emit(this.myControl.value);
  }
}
