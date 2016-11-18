import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '../store';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

console.log('`Home` bundle loaded asynchronously');

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
