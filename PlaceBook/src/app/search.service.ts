import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  findEmployeesByText(searchText: string): string[] {
    const r: string[] = [];

    const l = Math.random() * 10;
    for (let index = 0; index < l; index++) {
      r.push(index + 'aaa');
    }

    return r;
  }
}
