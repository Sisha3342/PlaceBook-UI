import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMapModalComponent } from './add-map-modal.component';

describe('AddOfficeModalComponent', () => {
  let component: AddMapModalComponent;
  let fixture: ComponentFixture<AddMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddMapModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
