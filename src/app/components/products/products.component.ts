import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  products :any;
  constructor(public productService:ProductServiceService) { }
  ngOnInit(): void {
    this.products = this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => console.error(err)
    });
  }
  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products=this.products.filter((product:any)=>product.id!=id);
      }
    });
  }
}
