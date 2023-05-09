import { ProductsService } from 'src/app/services/products.service';
import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnDestroy {

  private subs: Subscription;

  searchForm: FormGroup = this.fb.group({
    keywords: [null, Validators.required]
  });

  constructor(
    public translateService: TranslateService,
    private fb: FormBuilder,
    private productsService:ProductsService
  ){
    this.subs = this.searchForm.valueChanges
      .pipe(
        debounceTime(1000)
      ).subscribe(data => {
        this.makeRequest(data.keywords);
      })
    }


  makeRequest(keywords:string){
    this.productsService.keywordChanged.next(keywords);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
