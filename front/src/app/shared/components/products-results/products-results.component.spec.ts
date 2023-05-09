import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsResultsComponent } from './products-results.component';

describe('ProductsResultsComponent', () => {
  let component: ProductsResultsComponent;
  let fixture: ComponentFixture<ProductsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
