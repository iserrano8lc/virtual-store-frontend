import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel } from '../shared/models/product-model';
import { Subscription } from 'rxjs';
import { ProductsService } from '../shared/services/products-service.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit, OnDestroy {

  products: ProductModel[];
  productsSubs: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsSubs = this.productsService.getProducts()
    .subscribe(prods => {
      this.products = prods;
    });
  }

  ngOnDestroy() {
    if (this.productsSubs) {
      this.productsSubs.unsubscribe();
    }
  }
}
