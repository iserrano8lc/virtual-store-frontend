import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-checkout-base',
  templateUrl: './checkout-base.component.html',
  styleUrls: ['./checkout-base.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutBaseComponent implements OnInit {

  checkoutSteps: MenuItem[];
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.checkoutSteps = [
      {
        label: 'Facturación y Envío',
        routerLink: 'billing-shipping'
      },
      {
        label: 'Pago',
        routerLink: 'payment'
      },
      {
        label: 'Confirmación',
        routerLink: 'confirm'
      },
      {
        label: '¡Gracias!',
        routerLink: 'thank-you'
      }
    ];
  }

}
