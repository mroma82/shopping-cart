import { Observable } from "rxjs";
import { CategoryModel } from "../models/category-model";
import { ProductListFilterModel } from "../models/product-list-filter-model";
import { ProductModel } from "../models/product-model";
import { UserModel } from "../models/user-model";

export abstract class ApiService {
    abstract getProducts(): Observable<ProductModel[]>;
    abstract getProductsFiltered(filterModel: ProductListFilterModel): Observable<ProductModel[]>;
    abstract getProductsFeatured(): Observable<ProductModel[]>;
    abstract getSingleProduct(productId: string): Observable<ProductModel | undefined>;
    abstract getProductCategories(): Observable<CategoryModel[]>;
    abstract getCurrentUser(): Observable<UserModel>;
}