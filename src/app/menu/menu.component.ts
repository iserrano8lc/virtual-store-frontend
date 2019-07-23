import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { CartSidebarComponent } from '../shopping-cart/cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  mainItems: MenuItem[];
  userMenuItems: MenuItem[];
  displayCart: boolean;

  @ViewChild(CartSidebarComponent, {static: false}) cartSidebar: CartSidebarComponent;

  constructor() {
    this.displayCart = false;
  }

  ngOnInit() {
    this.mainItems = [
      {
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink: '/products'
      }
    ];

    this.userMenuItems = [
      {
        label: 'Mi Cuenta',
        icon: 'pi pi-user'
      },
      {
        separator: true
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out',
        routerLink: '/'
      }
    ];
  }

  ngOnDestroy() {

  }

  displayShoppingCart() {
    this.cartSidebar.cartDisplay = true;
  }

}
