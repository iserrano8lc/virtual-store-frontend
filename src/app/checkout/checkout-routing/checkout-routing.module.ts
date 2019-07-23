import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutBaseComponent } from '../checkout-base/checkout-base.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { PaymentComponent } from '../payment/payment.component';
import { BillingShippingComponent } from '../billing-shipping/billing-shipping.component';

const routes: Routes  = [
  {
    path:  'checkout',
    component:  CheckoutBaseComponent,
    children: [
      {
        path:  '',
        component:  BillingShippingComponent
      },
      {
        path:  'billing-shipping',
        component:  BillingShippingComponent
      },
      {
        path:  'payment',
        component:  PaymentComponent
      },
      {
        path:  'confirm',
        component:  ConfirmationComponent
      },
      {
        path: 'thank-you',
        component: ThankYouComponent
      }
  ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutRoutingModule { }
