import { SearchService } from './search.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, switchMap } from 'rxjs/operators';
import { User } from '../models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();

  @Input() filteredUsers: Observable<User[]>;
  @Output() filteredUsersChange = new EventEmitter<Observable<User[]>>();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap((value) => {
        this.filteredUsersChange.emit(this.filteredUsers);

        return this.searchService.searchUsers(0, 1000, value);
      })
    );
  }
}
