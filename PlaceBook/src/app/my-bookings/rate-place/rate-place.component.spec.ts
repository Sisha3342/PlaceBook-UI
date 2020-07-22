import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePlaceComponent } from './rate-place.component';

describe('RatePlaceComponent', () => {
  let component: RatePlaceComponent;
  let fixture: ComponentFixture<RatePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatePlaceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
