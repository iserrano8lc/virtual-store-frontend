import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product-model';
import { PreferenceOptionsModel } from 'src/app/shared/models/preference-options-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productId: string;
  product: ProductModel;
  preferences: PreferenceOptionsModel[];

  productSubs: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    this.productId = activatedRoute.snapshot.params['productId'];
    console.log(this.productId);

    this.productSubs = this.productsService.getSingleProduct(this.productId)
    .subscribe(value => {
      this.product = value;
      this.preferences = value.preferences;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.productSubs) {
      this.productSubs.unsubscribe();
    }
  }
}
