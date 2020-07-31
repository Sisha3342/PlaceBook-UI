import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMapAddressModalComponent } from './edit-map-address-modal.component';

describe('EditMapAddressModalComponent', () => {
  let component: EditMapAddressModalComponent;
  let fixture: ComponentFixture<EditMapAddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMapAddressModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMapAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
