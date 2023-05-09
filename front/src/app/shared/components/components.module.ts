import { MaterialModule } from './../../material-components/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBarComponent } from './info-bar/info-bar.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import {LayoutModule} from '@angular/cdk/layout';
import { TranslateModule } from '@ngx-translate/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsGroupComponent } from './cards-group/cards-group.component';
import { CardComponent } from './card/card.component';
import { ProductsResultsComponent } from './products-results/products-results.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CardInputComponent } from './card-input/card-input.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    InfoBarComponent,
    SearchBarComponent,
    InputSearchComponent,
    CardsGroupComponent,
    CardComponent,
    ProductsResultsComponent,
    PaginatorComponent,
    CardInputComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CdkMenuModule,
    TranslateModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InfoBarComponent,
    SearchBarComponent,
    InputSearchComponent,
    CardsGroupComponent,
    CardComponent,
    ProductsResultsComponent,
    PaginatorComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
