import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item-model';
import { CartContextService } from '../../services/context/cart-context.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.sass']
})
export class CartPageComponent implements OnInit {

  // state
  cart$ = this.cartContext.cart$;
  cartTotal$ = this.cartContext.cartTotal$;

  // update
  cartUpdate: any = {};

  // new
  constructor(
    private cartContext: CartContextService
  ) { }

  ngOnInit(): void {
  }

  // remove from cart
  removeFromCart(productId?: string) {
    if (productId)
      this.cartContext.removeFromCart(productId);
  }

  // update cart qty
  updateCartItemQuantity(cartItem: CartItemModel, qty: number) {
    this.cartContext.updateCartItemQuantity(cartItem, qty);
  }
}
