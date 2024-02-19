import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/sharedComponents/navbar/navbar.component';
import { HeroSecComponent } from './components/hero-sec/hero-sec.component';
import { OurProductsSecComponent } from './components/our-products-sec/our-products-sec.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { NotFoundComponent } from './components/sharedComponents/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSecComponent,
    OurProductsSecComponent,
    LearnMoreComponent,
    QuoteComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
