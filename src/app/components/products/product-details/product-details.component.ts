import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  product:any;
  constructor(private activatedRoute: ActivatedRoute,public productService:ProductServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(this.id).subscribe({
      next: data => {
        this.product = data;
      },
      error: err => console.error(err)
    });
  }
}
