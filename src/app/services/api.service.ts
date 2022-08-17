import { Observable } from "rxjs";
import { ProductModel } from "../models/product-model";
import { UserModel } from "../models/user-model";

export abstract class ApiService {
    abstract getProducts(): Observable<ProductModel[]>;
    abstract getProductByCategory(categoryId: string): Observable<ProductModel[]>;
    abstract getProductsFeatured(): Observable<ProductModel[]>;
    abstract getSingleProduct(productId: string): Observable<ProductModel | undefined>;
    abstract getCurrentUser(): Observable<UserModel>;
}