import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.interface';
import { Product } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

  badgeCart = 0;

  cartItems: Cart[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cartElementsChanges.subscribe((res:any)=>{
      this.badgeCart = res
      this.cartItems = this.cartService.getLastElements
    }
    )
  }

}
