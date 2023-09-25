import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost: 4200(yeni hech bir url elave edilmeyib )
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotfoundComponent }, // ** --  url-e linklerden elave herhansisa bir herf reqem yazdiqda
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // yuxarida hazirladigimiz rootinglerin gonderirik bura
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
