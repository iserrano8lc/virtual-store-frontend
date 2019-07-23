import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'products', component: ProductGridComponent},
  {path: 'product/:productId', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
