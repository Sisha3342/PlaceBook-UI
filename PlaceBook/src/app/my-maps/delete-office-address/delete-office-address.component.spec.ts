import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOfficeAddressComponent } from './delete-office-address.component';

describe('DeleteOfficeAddressComponent', () => {
  let component: DeleteOfficeAddressComponent;
  let fixture: ComponentFixture<DeleteOfficeAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOfficeAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOfficeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
