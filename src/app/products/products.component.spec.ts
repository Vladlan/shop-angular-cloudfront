import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

describe('ProductsComponent', () => {
  // let component: ProductsComponent;
  // let fixture: ComponentFixture<ProductsComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ProductsComponent],
  //     providers: [
  //       {
  //         provide: CONFIG_TOKEN,
  //         useValue: environment,
  //       },
  //       ProductsService
  //     ],
  //     schemas: [NO_ERRORS_SCHEMA],
  //     imports: [HttpClientModule]
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
