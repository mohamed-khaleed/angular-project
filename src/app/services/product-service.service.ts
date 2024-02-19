import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  baseURL: string = 'http://localhost:9000/products';
  constructor(public http: HttpClient) {}


  getProducts()  {
    return this.http.get(this.baseURL);
  }



  getProductById(id: any)  {
   
    // return this.http.get<Iproduct>(this.baseURL + '/' + id);
    return this.http.get(`${this.baseURL}/${id}`);
  }



  addProduct(product: Iproduct) {
    return this.http.post(this.baseURL, product);
  }


  updateProduct( productId: any,product: Iproduct) {
    return this.http.put(this.baseURL + '/' + productId, product);
  }


  deleteProduct(id: number) {
    return this.http.delete(this.baseURL + '/' + id);
  }
}
