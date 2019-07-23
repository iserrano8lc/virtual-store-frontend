import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports from PrimeNG
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {SpinnerModule} from 'primeng/spinner';
import {StepsModule} from 'primeng/steps';


// Imports from Application
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PreferenceValuesComponent } from './products/preference-values/preference-values.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CartProductCardComponent } from './shopping-cart/cart-product-card/cart-product-card.component';
import { CartSidebarComponent } from './shopping-cart/cart-sidebar/cart-sidebar.component';
import { CheckoutBaseComponent } from './checkout/checkout-base/checkout-base.component';
import { BillingShippingComponent } from './checkout/billing-shipping/billing-shipping.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import { ThankYouComponent } from './checkout/thank-you/thank-you.component';
import { CheckoutRoutingModule } from './checkout/checkout-routing/checkout-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductDetailComponent,
    PreferenceValuesComponent,
    ProductGridComponent,
    CartProductCardComponent,
    CartSidebarComponent,
    CheckoutBaseComponent,
    BillingShippingComponent,
    PaymentComponent,
    ConfirmationComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    // Move this to the Checkout Module
    CheckoutRoutingModule,

    CardModule,
    ButtonModule,
    PanelModule,
    MenubarModule,
    DropdownModule,
    MenuModule,
    SidebarModule,
    SpinnerModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
