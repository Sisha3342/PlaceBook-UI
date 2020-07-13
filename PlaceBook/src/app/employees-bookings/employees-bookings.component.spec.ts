import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesBookingsComponent } from './employees-bookings.component';

describe('EmployeesBookingsComponent', () => {
  let component: EmployeesBookingsComponent;
  let fixture: ComponentFixture<EmployeesBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
