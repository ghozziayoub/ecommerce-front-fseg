import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { ProductListComponent } from './components/management/product/product-list/product-list.component';
import { ProductAddComponent } from './components/management/product/product-add/product-add.component';
import { ProductUpdateComponent } from './components/management/product/product-update/product-update.component';
import { CategoryListComponent } from './components/management/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/management/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/management/category/category-update/category-update.component';
import { DashboardComponent } from './components/management/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "management",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "product",
        children: [
          {
            path: "list",
            component: ProductListComponent
          },
          {
            path: "add",
            component: ProductAddComponent
          },
          {
            path: "update/:idProduct",
            component: ProductUpdateComponent
          }
        ]
      },
      {
        path: "category",
        children: [
          {
            path: "list",
            component: CategoryListComponent
          },
          {
            path: "add",
            component: CategoryAddComponent
          },
          {
            path: "update/:idCategory",
            component: CategoryUpdateComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
