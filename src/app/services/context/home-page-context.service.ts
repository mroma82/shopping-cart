import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { ProductModel } from '../../models/product-model';
import { ApiService } from '../api.service';

@Injectable()
export class HomePageContextService {

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
    this.api.getProductsFeatured().subscribe(x => this._productsStore$.next(x));
  }
}
