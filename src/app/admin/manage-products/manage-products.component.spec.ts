import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from 'src/app/core/injection-tokens/config.token';
import { ProductsService } from 'src/app/products/products.service';
import { environment } from 'src/environments/environment';

import { ManageProductsComponent } from './manage-products.component';
import { ManageProductsService } from './manage-products.service';

describe('ManageProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageProductsComponent],
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: environment,
        },
        ProductsService,
        ManageProductsService,
      ],
      imports: [HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
