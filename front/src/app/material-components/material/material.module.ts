import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    CardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule
  ],
  exports: [
    CardComponent,
    SidenavComponent,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
