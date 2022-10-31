import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from 'src/app/core/injection-tokens/config.token';
import { ProductsService } from 'src/app/products/products.service';
import { environment } from 'src/environments/environment';

import { ManageProductsService } from './manage-products.service';

describe('ManageProductsService', () => {
  let service: ManageProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ManageProductsService,
        ProductsService,
        {
          provide: CONFIG_TOKEN,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(ManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
