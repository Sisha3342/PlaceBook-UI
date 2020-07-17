import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddBookingComponent } from './button-add-booking.component';

describe('ButtonAddBookingComponent', () => {
  let component: ButtonAddBookingComponent;
  let fixture: ComponentFixture<ButtonAddBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAddBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
