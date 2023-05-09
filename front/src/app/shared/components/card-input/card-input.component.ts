import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {

  @Output() totalItems = new EventEmitter<number>;

  public inputForm: FormGroup = this.fb.group({
    itemsNumber: [1]
  })

  get itemsNumberControl(): AbstractControl {
    return this.inputForm.controls['itemsNumber']
  }

  get numberValue() {
    return this.itemsNumberControl.value
  }

  constructor(private fb: FormBuilder){}

  decreaseNumber(){
    if(this.numberValue>0){
      this.itemsNumberControl.setValue(this.numberValue-1)
      this.totalItems.emit(this.numberValue)
    }
  }

  increaseNumber(){
      this.itemsNumberControl.setValue(this.numberValue+1)
      this.totalItems.emit(this.numberValue)
  }

}
