import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { CartItemModel } from '../../models/cart-item-model';
import { ProductModel } from '../../models/product-model';
import { ApiService } from '../api.service';
import { MessageContextService } from './message-context.service';

@Injectable({
  providedIn: 'root'
})
export class CartContextService {

  // define state
  // cart
  private _cartStore$ = new BehaviorSubject<CartItemModel[]>([]);
  public cart$ = this._cartStore$.asObservable();

  // cart total
  cartTotal$ = this._cartStore$.pipe(map(arr => this.calculateCartTotal(arr)));

  // new
  constructor(
    private api: ApiService,
    private messageContext: MessageContextService
  ) {
  }

  // function that calculates the cart total
  calculateCartTotal(cart: CartItemModel[]) {
    return cart.reduce((sum, i) => sum += i.qty * (i.product?.price ?? 0), 0)
  }

  // add to cart
  addToCart(product: ProductModel, qty: number) {

    // get the list
    var items = this._cartStore$.value;

    // check if the item exists
    var existingItem = this.findCartItemByProductId(product.id ?? "");
    if (existingItem) {
      existingItem.qty += qty;

      // message
      this.messageContext.success("Updated your cart");
    }

    // else add
    else {
      items.push({
        product: product,
        qty: qty
      });

      // message
      this.messageContext.success("Added to your cart");
    }

    // send
    this._cartStore$.next(items);
  }

  // remove from cart
  removeFromCart(productId: string) {

    // get the list
    var items = this._cartStore$.value;

    // find in the list, remove if found
    var existingItemIndex = items.findIndex(x => x.product?.id === productId);
    if (existingItemIndex > -1) {
      items.splice(existingItemIndex, 1);

      // message
      this.messageContext.success("Removed item from your cart");

      // send
      this._cartStore$.next(items);
    }
  }

  // update cart item quantity
  updateCartItemQuantity(cartItem: CartItemModel, qty: number) {

    // check if no product
    if (!cartItem.product?.id) {
      return;
    }

    // if zero, then remove
    if (qty == 0) {
      this.removeFromCart(cartItem?.product?.id);
      return;
    }

    // update the quantity
    cartItem.qty = qty;

    // message
    this.messageContext.success("Updated your cart");

    // get the list to push
    var items = this._cartStore$.value;
    this._cartStore$.next(items);
  }


  // find cart item by product id
  findCartItemByProductId(productId: string): CartItemModel | undefined {

    // get the items
    var items = this._cartStore$.value;

    // try to find
    var item = items.find(x => x.product?.id === productId);
    return item;
  }
}
