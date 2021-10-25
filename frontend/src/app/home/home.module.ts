import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '@app/shared/pipe/search-filter.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    SearchFilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    SearchFilterPipe
  ]
})
export class HomeModule { }
