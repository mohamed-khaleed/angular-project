import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  id: any;
  product:any;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    photoPath: new FormControl(
      "assets/images/I'm From Mugwort Mask Review 1.jpg",
      Validators.required
    ),
    quantity: new FormControl('', Validators.required),
  });

  constructor(
    public productService: ProductServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log(typeof(this.id))
      },
    });
    if (this.id != 0) {
      this.productService.getProductById(this.id).subscribe({
        next: (data) => {
          this.product= data;
          this.getName.setValue(this.product.name);
          this.getPrice.setValue(this.product.price);
          this.getQuantity.setValue(this.product.quantity);
        },
        error: (err) => console.error(err),
      });
    }
  }

  onSubmit(): void {}

  performAnAction(e: any) {
    e.preventDefault();

    if (this.productForm.valid) {
     
      if (this.id != 0) {
     
        this.productService.updateProduct(this.id,this.productForm.value).subscribe({
          next: () => {
          
            this.router.navigate(['/products']);
          },
          error: (err) => console.error(err),
        })
      }
      else{
        console.log(this.productForm.value)
        console.log("hi")
        this.productService.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (err) => console.error(err),
        })
      }
    }
  }
  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }
}
