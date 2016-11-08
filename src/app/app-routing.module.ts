import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';

const ROUTES: Routes = [
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    HomeRoutingModule,
    AboutRoutingModule
  ]
})
export class AppRoutingModule {}

