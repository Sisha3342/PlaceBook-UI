import { TestBed } from '@angular/core/testing';

import { EmployeesBookingsService } from './employees-bookings.service';

describe('EmployeesBookingsService', () => {
  let service: EmployeesBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
