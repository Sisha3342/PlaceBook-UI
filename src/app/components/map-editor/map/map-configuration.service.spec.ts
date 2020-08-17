import { TestBed } from '@angular/core/testing';

import { MapConfigurationService } from './map-configuration.service';

describe('MapConfigurationService', () => {
  let service: MapConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
