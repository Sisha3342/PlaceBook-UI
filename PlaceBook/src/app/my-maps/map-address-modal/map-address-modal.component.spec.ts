import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMapAddressComponent } from './map-address-modal.component';

describe('EditMapAddressComponent', () => {
  let component: EditMapAddressComponent;
  let fixture: ComponentFixture<EditMapAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditMapAddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMapAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
