import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryModel } from "../models/category-model";
import { ProductListFilterModel } from "../models/product-list-filter-model";
import { ProductModel } from "../models/product-model";
import { UserModel } from "../models/user-model";
import { ApiService } from "./api.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from "../../environments/environment";
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class HttpApiService implements ApiService {

    // get url
    getUrl = (path: string) => `${environment.apiUrl}${path}`;

    // new
    constructor(
        private httpClient: HttpClient
    ) { }


    // get products
    getProducts(): Observable<ProductModel[]> {
        return this.httpClient.get<ProductModel[]>(this.getUrl("/products/all"));
    }

    // products filtered
    getProductsFiltered(filterModel: ProductListFilterModel): Observable<ProductModel[]> {
        return this.httpClient.post<ProductModel[]>(this.getUrl("/products/list"), filterModel);
    }

    // featured products
    getProductsFeatured(): Observable<ProductModel[]> {
        return this.httpClient.get<ProductModel[]>(this.getUrl("/products/featured"));
    }

    // single product
    getSingleProduct(productId: string): Observable<ProductModel | undefined> {
        return this.httpClient.get<ProductModel>(this.getUrl(`/products/get/${productId}`));
    }

    // product categories
    getProductCategories(): Observable<CategoryModel[]> {
        return this.httpClient.get<ProductModel[]>(this.getUrl("/productscategories/all"));
    }

    // current user
    getCurrentUser(): Observable<UserModel> {
        return this.httpClient.get<UserModel>(this.getUrl("/auth/check"));
    }
}