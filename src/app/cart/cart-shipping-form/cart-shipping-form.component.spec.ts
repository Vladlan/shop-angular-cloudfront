import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShippingFormComponent } from './cart-shipping-form.component';

describe('CartShippingFormComponent', () => {
  let component: CartShippingFormComponent;
  let fixture: ComponentFixture<CartShippingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartShippingFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
