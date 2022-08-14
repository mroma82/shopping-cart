import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CategoryModel } from '../models/category-model';
import { ProductModel } from '../models/product-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // product list
  getProducts = () => of(products);

  // products by category
  getProductByCategory(categoryId: string) {

    // filter the list
    return of(products.filter(x => x.category === categoryId));
  }

  // single product
  getSingleProduct(id: string) {

    // find the product
    return of(products.find(x => x.id === id));
  }


  // get the current user
  getCurrentUser = () => of(currentUser);
}

// mock categories
const categories: CategoryModel[] = [
  { id: "43f398aa-86c9-4e73-a9a1-b0e4919db65e", name: "Shirt" },
  { id: "1b207e88-873c-4cac-8629-f52079126c9c", name: "Pants" },
  { id: "85f53fc5-e5e6-496e-8529-68bc7a517a01", name: "Other" }
];

// mock products
const products: ProductModel[] = [
  { id: "d2a36ca3-ab5d-4ac9-a37d-3c4ed63c9506", description: "Polo shirt", category: categories[0].id },
  { id: "2c02dc7f-90f3-496b-a110-9e70b58a5311", description: "Tee-shirt", category: categories[0].id },
  { id: "afb3ffbc-6395-4f22-89b7-b9b18ee955bc", description: "Sweatpants", category: categories[1].id },
  { id: "976677bd-507e-4e26-9e58-8710653694fc", description: "Dress pants", category: categories[1].id },
  { id: "b4d27828-6324-429c-b957-d81973d1b211", description: "Shorts", category: categories[2].id },
  { id: "b0d7414c-6d4c-4959-83ff-9510c4a6cc5f", description: "Coffee Cup", category: categories[2].id }
]

// mock user
const currentUser: UserModel = {
  id: "245b6620-fcdc-4731-b075-8eb59488200f",
  name: "Michael Roma"
}