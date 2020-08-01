import { TestBed } from '@angular/core/testing';

import { PlaceInfoService } from './place-info.service';

describe('PlaceInfoService', () => {
  let service: PlaceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
