import { Routes } from "@angular/router";


import { AboutComponent } from './about/about.component';
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { AdminUpdateComponent } from "./admin-update/admin-update.component";
import { AdminComponent } from "./admin/admin.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductCartComponent } from "./product-cart/product-cart.component";
import { ProductConfirmComponent } from "./product-confirm/product-confirm.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { ProductsComponent } from "./products/products.component";
import { TttComponent } from "./ttt/ttt.component";

export const applicationRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    {path:'products', component:ProductsComponent},
    {path:'admin', component:AdminComponent},
    {path:'product-search', component:ProductSearchComponent},
    {path:'product-cart/:id', component:ProductCartComponent},
    {path:'ttt',component:TttComponent},
    {path:'product-confirm' , component:ProductConfirmComponent},
    {path:'product-search/:name' , component:ProductSearchComponent},
    {path:'admin-home' , component:AdminHomeComponent},
    {path:'admin-products' , component:AdminProductsComponent},
    {path:'product-add' , component:ProductAddComponent},
    {path:'product-delete/:id' , component:ProductDeleteComponent},
    {path:'admin-update' , component:AdminUpdateComponent}
]
