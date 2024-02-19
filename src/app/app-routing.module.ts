import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/sharedComponents/not-found/not-found.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'product/:id/edit', component: ProductFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
