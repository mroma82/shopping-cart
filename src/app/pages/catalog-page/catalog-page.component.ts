import { Component, OnInit } from '@angular/core';
import { CatalogPageContextService } from '../../services/context/catalog-page-context.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.sass'],
  providers: [
    CatalogPageContextService
  ]
})
export class CatalogPageComponent implements OnInit {

  // state
  products$ = this.context.products$;

  // new
  constructor(
    private context: CatalogPageContextService
  ) { }

  // init
  ngOnInit(): void {

    // init context
    this.context.init();
  }
}
