import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './containers/container/container.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { MessageToastComponent } from './components/shared/message-toast/message-toast.component';
import { ApiService } from './services/api.service';
import { MockApiService } from './services/api-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomePageComponent,
    CatalogPageComponent,
    ProductPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProductListComponent,
    TopNavComponent,
    MessageToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: ApiService, useExisting: MockApiService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
