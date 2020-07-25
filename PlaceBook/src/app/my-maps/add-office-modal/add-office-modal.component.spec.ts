import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficeModalComponent } from './add-office-modal.component';

describe('AddOfficeModalComponent', () => {
  let component: AddOfficeModalComponent;
  let fixture: ComponentFixture<AddOfficeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOfficeModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
