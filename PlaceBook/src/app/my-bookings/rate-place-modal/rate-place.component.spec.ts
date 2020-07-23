import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePlaceModalComponent } from './rate-place-modal.component';

describe('RatePlaceComponent', () => {
  let component: RatePlaceModalComponent;
  let fixture: ComponentFixture<RatePlaceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatePlaceModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
