import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBookingComponent } from './map-booking.component';

describe('MapBookingComponent', () => {
  let component: MapBookingComponent;
  let fixture: ComponentFixture<MapBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapBookingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
