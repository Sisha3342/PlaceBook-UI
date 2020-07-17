import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputText = '';
  inputArray = ['ddd', 'fff', 'ggg', 'jghjhbkj'];

  checkInput(): void {
    this.inputArray = this.inputArray.filter(
      (input) => (input = this.inputText)
    );
  }

  constructor() {}

  instantFilter() {}
  showSearched() {}

  ngOnInit(): void {}
}
