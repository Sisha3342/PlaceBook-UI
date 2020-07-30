import { TestBed } from '@angular/core/testing';

import { FloorsConverterService } from './floors-converter.service';

describe('FloorsConverterService', () => {
  let service: FloorsConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorsConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
