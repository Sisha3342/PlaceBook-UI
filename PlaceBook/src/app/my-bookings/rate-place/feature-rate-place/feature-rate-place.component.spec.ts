import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRatePlaceComponent } from './feature-rate-place.component';

describe('FeatureRatePlaceComponent', () => {
  let component: FeatureRatePlaceComponent;
  let fixture: ComponentFixture<FeatureRatePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureRatePlaceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRatePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
