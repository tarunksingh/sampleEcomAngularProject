import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartData;
  ngOnInit(): void {
    this.cartService.getCard().subscribe((usersData) => {
      this.cartData = usersData;
    });
  }
}
