import { SearchService } from './search.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime, switchMap } from 'rxjs/operators';
import { User } from '../../../models/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();

  @Input() users: User[];
  @Output() usersChange = new EventEmitter<User[]>();

  constructor(
    private searchService: SearchService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show('employeeSpinner');
    const filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap((value) => {
        this.spinner.hide('employeeSpinner');

        return this.searchService.searchUsers(0, 1000, value);
      })
    );

    filteredUsers.subscribe((users) => {
      this.users = users;

      this.usersChange.emit(users);
    });
  }
}
