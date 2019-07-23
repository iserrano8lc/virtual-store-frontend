import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent implements OnInit {

  @Input() cartDisplay: boolean;

  constructor() { }

  ngOnInit() {
  }

}
