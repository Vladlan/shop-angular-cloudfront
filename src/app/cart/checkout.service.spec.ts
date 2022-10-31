import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';
import { ProductsService } from '../products/products.service';
import { CartService } from './cart.service';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
          {
            provide: CONFIG_TOKEN,
            useValue: environment,
          },
          CartService,
          ProductsService
      ]
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
