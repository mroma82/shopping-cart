import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { CartItemModel } from '../../models/cart-item-model';
import { ProductModel } from '../../models/product-model';
import { ApiService, PRODUCTS } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CartContextService {

  // define state
  // cart
  private _cartStore$ = new BehaviorSubject<CartItemModel[]>([]);
  public cart$ = this._cartStore$.asObservable();

  // cart total
  cartTotal$ = this._cartStore$.pipe(map(arr => arr.reduce((sum, i) => sum += i.qty * (i.product?.price ?? 0), 0)));

  // new
  constructor(
    private api: ApiService
  ) {
    // hack
    this.addToCart(PRODUCTS[0], 1);
    this.addToCart(PRODUCTS[1], 2);
    this.addToCart(PRODUCTS[2], 1);
  }

  // add to cart
  addToCart(product: ProductModel, qty: number) {

    // get the list
    var items = this._cartStore$.value;

    // check if the item exists
    var existingItem = this.findCartItemByProductId(product.id ?? "");
    if (existingItem) {
      existingItem.qty += qty;
    }

    // else add
    else {
      items.push({
        product: product,
        qty: qty
      });
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
    }

    // update the quantity
    cartItem.qty = qty;

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
