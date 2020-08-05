import { SearchService } from './search.service';
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
import { User } from '../../models/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnChanges {
  myControl = new FormControl();

  @Input() filteredUsers: Observable<User[]>;
  @Output() filteredUsersChange = new EventEmitter<Observable<User[]>>();

  constructor(
    private searchService: SearchService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show('employeeSpinner');
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap((value) => {
        this.filteredUsersChange.emit(this.filteredUsers);
        this.spinner.hide('employeeSpinner');

        return this.searchService.searchUsers(0, 1000, value);
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredUsersChange.emit(this.filteredUsers);
  }
}
