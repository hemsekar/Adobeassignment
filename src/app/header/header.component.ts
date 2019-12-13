import { Component, OnInit } from "@angular/core";
import { ShoppingcartService } from "../shoppingcart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  allProducts: any = [];
  constructor(
    private shoppingservice: ShoppingcartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.shoppingservice.productSendDetails.subscribe(products => {
      console.log(products);
      this.allProducts = products;
    });
  }

  goToCart() {
    localStorage.setItem("userProducts", JSON.stringify(this.allProducts));
    this.router.navigate(["/cartdetails"]);
  }
}
