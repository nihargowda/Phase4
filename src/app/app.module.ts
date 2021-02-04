import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { applicationRoutes } from './app-routing';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { TttComponent } from './ttt/ttt.component';
import { ProductConfirmComponent } from './product-confirm/product-confirm.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';

@NgModule({
  declarations: [
  
    MainComponent,
  
    AboutComponent,
  
    ContactComponent,
  
    HomeComponent,
  
    ProductsComponent,
  
    AdminComponent,
  
    ProductSearchComponent,
  
    ProductCartComponent,
  
    TttComponent,
  
    ProductConfirmComponent,
  
    AdminHomeComponent,
  
    AdminProductsComponent,
  
    ProductAddComponent,
  
    ProductDeleteComponent,
  
    AdminUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
