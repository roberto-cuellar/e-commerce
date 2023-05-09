import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  itemNumbers = 1;

  @Input('id') id!: string;
  @Input('name') name!: string;
  @Input('price') price!: string;
  @Input('brand') brand!: string;
  @Input('keyword') keyword!: string;
  @Input('img') img!: string;

  constructor(private cartService: CartService){}

  setItemsNumber(itemNumber:number){
    this.itemNumbers = itemNumber;
  }

  addToCart(){
    this.cartService.addProductToCart(
      {
        id:this.id,
        name:this.name,
        price: this.price,
        brand: this.brand,
        keyword: this.keyword,
        img: this.img
      },
      this.itemNumbers
    )
  }

}

