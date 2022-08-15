export class ProductModel {
    id?: string;
    description?: string;
    teaserText?: string;
    contentHtml?: string;
    price?: number;
    imageUrl?: string;
    category?: string;

    // featured
    featured?: boolean;
    featuredSort?: number;
}
