import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Input() title?: string;
  @Input() products?: ProductModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
