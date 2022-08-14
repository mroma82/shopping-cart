import { ProductModel } from "./product-model";

export class CartItemModel {
    product?: ProductModel;
    qty: number = 0;
}
