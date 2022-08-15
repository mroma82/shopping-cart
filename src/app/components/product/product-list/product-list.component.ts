import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product-model';
import { CartContextService } from '../../../services/context/cart-context.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Input() title?: string;
  @Input() products?: ProductModel[];

  // new
  constructor(
    private cartContext: CartContextService
  ) { }

  ngOnInit(): void {
  }

  // add to cart
  addToCart(product: ProductModel) {
    this.cartContext.addToCart(product, 1);
  }
}
