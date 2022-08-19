import { Component, OnInit } from '@angular/core';
import { CatalogPageContextService } from '../../../services/context/catalog-page-context.service';

@Component({
  selector: 'app-product-list-filter',
  templateUrl: './product-list-filter.component.html',
  styleUrls: ['./product-list-filter.component.sass']
})
export class ProductListFilterComponent implements OnInit {

  // state
  categories$ = this.context.categories$;

  // new
  constructor(
    private context: CatalogPageContextService
  ) { }

  ngOnInit(): void {
  }

  // update the category
  updateCategory(categoryId: string) {
    this.context.updateFilter({
      categoryId: categoryId
    });
  }
}
