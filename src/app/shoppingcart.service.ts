import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingcartService {
  productSendDetails = new Subject();
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("https://api.myjson.com/bins/qzuzi");
  }
  addProductsToCart(products) {
    this.productSendDetails.next(products);
  }
}
