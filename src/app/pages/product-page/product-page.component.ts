import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product-model';
import { CartContextService } from '../../services/context/cart-context.service';
import { ProductPageContextService } from '../../services/context/product-page-context.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass'],
  providers: [
    ProductPageContextService
  ]
})
export class ProductPageComponent implements OnInit {

  // state
  product$ = this.context.product$;

  // new
  constructor(
    private context: ProductPageContextService,
    private cartContext: CartContextService,
    private route: ActivatedRoute
  ) { }

  // init
  ngOnInit(): void {

    // init context
    this.route.paramMap.subscribe(x => {

      // get the id
      let id = x.get("id");
      if (id)
        this.context.init(id);
    });
  }

  // add to cart
  addToCart(product: ProductModel) {
    this.cartContext.addToCart(product, 1);
  }
}
