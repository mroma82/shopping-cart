import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './containers/container/container.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: "",

    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "cart",
        component: CartPageComponent
      },
      {
        path: "checkout",
        component: CheckoutPageComponent
      },
      {
        path: "catalog",
        component: CatalogPageComponent
      },
      {
        path: "product/:id",
        component: ProductPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
