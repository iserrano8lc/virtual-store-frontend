import { Injectable } from '@angular/core';
import { BackendFacadeService } from './backend-facade.service';
import { ProductModel } from '../models/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private backendFacade: BackendFacadeService) { }

  getProducts(): Observable<ProductModel[]> {
    return this.backendFacade.serviceGet('/products');
  }

  getSingleProduct(productId: string): Observable<ProductModel> {
    return this.backendFacade.serviceGet('/products/' + productId);
  }
}
