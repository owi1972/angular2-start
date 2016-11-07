import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about.component';
import { ABOUT_RESOLVER_PROVIDERS } from './about.resolver';
import { ROUTES } from './about.routes';

const ABOUT_PROVIDERS = [
  ...ABOUT_RESOLVER_PROVIDERS,
];

console.log('`About` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [
    ABOUT_PROVIDERS
  ]
})
export default class AboutModule {
  static routes = ROUTES;
}
