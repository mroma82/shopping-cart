import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../../models/product-model';
import { ApiService } from '../api.service';

@Injectable()
export class ProductPageContextService {

  // state
  private _productStore$ = new BehaviorSubject<ProductModel | undefined>(undefined);
  public product$ = this._productStore$.asObservable();

  // new
  constructor(
    private api: ApiService
  ) {
  }

  // init
  init(productId: string) {
    this.api.getSingleProduct(productId).subscribe(x => this._productStore$.next(x));
  }
}
