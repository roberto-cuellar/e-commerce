import { Product } from './../models/product.interface';
import { Cart } from './../models/cart.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = []

  cartElementsChanges = new Subject();

  constructor() { }

  obtainElement(elementId:string){
    return this.cart.find(items => items.product.id === elementId)
  }

  addProductToCart(payload:Product, quantity: number){
    let element = this.obtainElement(payload.id);
    if(element){
      if(element.quantity){
        element.quantity += quantity;
      }else{
        element.quantity = quantity;
      }
    }else{
      this.cart.push({product: payload, quantity:quantity})
      this.cartElementsChanges.next(this.countCartElements)
    }
  }

  get countCartElements():number{
    return this.cart.length
  }

  get getLastElements(){
    return this.cart.slice(0,3)
  }



}



