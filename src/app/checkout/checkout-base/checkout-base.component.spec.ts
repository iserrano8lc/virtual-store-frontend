import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBaseComponent } from './checkout-base.component';

describe('CheckoutBaseComponent', () => {
  let component: CheckoutBaseComponent;
  let fixture: ComponentFixture<CheckoutBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
