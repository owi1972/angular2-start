import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

console.log('`About` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
