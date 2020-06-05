import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/management/dashboard/dashboard.component';
import { ProductListComponent } from './components/management/product/product-list/product-list.component';
import { ProductAddComponent } from './components/management/product/product-add/product-add.component';
import { ProductUpdateComponent } from './components/management/product/product-update/product-update.component';
import { CategoryListComponent } from './components/management/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/management/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/management/category/category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
