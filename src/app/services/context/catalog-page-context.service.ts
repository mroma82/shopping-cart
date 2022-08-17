import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductModel } from '../../models/product-model';
import { ApiService } from '../api.service';

@Injectable()
export class CatalogPageContextService {

  // state
  private _productsStore$ = new BehaviorSubject<ProductModel[]>([]);
  public products$ = this._productsStore$.asObservable();



  // new
  constructor(
    private api: ApiService
  ) {
  }

  // init
  init() {
    this.api.getProducts().subscribe(x => this._productsStore$.next(x));
  }
}
