import { Injectable, OnDestroy } from '@angular/core';
import { combineLatest, debounce, filter, Observable, shareReplay, Subscription, timer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CategoryModel } from '../../models/category-model';
import { ProductListFilterModel } from '../../models/product-list-filter-model';
import { ProductModel } from '../../models/product-model';
import { ApiService } from '../api.service';

@Injectable()
export class CatalogPageContextService implements OnDestroy {

  // state
  // products
  private _productsStore$ = new BehaviorSubject<ProductModel[]>([]);
  public products$ = this._productsStore$.asObservable();

  // filter
  private _filterStore$ = new BehaviorSubject<ProductListFilterModel>({});
  public filter$ = this._filterStore$.asObservable();

  // categories
  public categories$: Observable<CategoryModel[]> = this.api.getProductCategories().pipe(shareReplay());

  // subscriptions
  subs = new Subscription();

  // new
  constructor(
    private api: ApiService
  ) {

    // setup change filter
    combineLatest([this.filter$]).pipe(debounce(() => timer(300))).subscribe(([filter]) => {
      this.api.getProductsFiltered(filter).subscribe(x => this._productsStore$.next(x));
    });
  }

  // cleanup
  ngOnDestroy(): void {
    if (this.subs)
      this.subs.unsubscribe();
  }

  // init
  init() {
    this.api.getProducts().subscribe(x => this._productsStore$.next(x));
  }

  // update filter
  updateFilter(filter: ProductListFilterModel) {

    // get the existing filter
    var currentFilter = this._filterStore$.value;

    // apply new filter
    this._filterStore$.next({
      ...currentFilter,
      ...filter
    });
  }
}
