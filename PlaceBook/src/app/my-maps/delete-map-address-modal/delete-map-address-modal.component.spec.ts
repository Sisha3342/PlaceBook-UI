import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMapAddressModalComponent } from './delete-map-address-modal.component';

describe('DeleteMapAddressModalComponent', () => {
  let component: DeleteMapAddressModalComponent;
  let fixture: ComponentFixture<DeleteMapAddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMapAddressModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMapAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
