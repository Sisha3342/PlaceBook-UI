import { SearchService } from './search.service';
<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap, debounceTime } from 'rxjs/operators';

import { AppMaterialModule } from './../app-material/app-material.module';
=======
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, switchMap } from 'rxjs/operators';
import { User } from '../models/user';
>>>>>>> master

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnChanges {
  myControl = new FormControl();

<<<<<<< HEAD
  filteredUsers: Observable<string[]>;

  @Output()
  typeText = new EventEmitter<string>();

=======
  @Input() filteredUsers: Observable<User[]>;
  @Output() filteredUsersChange = new EventEmitter<Observable<User[]>>();

>>>>>>> master
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
<<<<<<< HEAD
      map((value) => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    value = value.toLowerCase();
    return this.searchService.autocompleteUsers(value);
  }

  onType(): void {
    this.typeText.emit(this.myControl.value);
=======
      switchMap((value) => {
        return this.searchService.searchUsers(0, 1000, value);
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filteredUsersChange.emit(this.filteredUsers);
>>>>>>> master
  }
}
