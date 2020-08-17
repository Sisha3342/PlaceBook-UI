import { TestBed } from '@angular/core/testing';

import { MapObjectService } from './map-object.service';

describe('MapObjectService', () => {
  let service: MapObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
