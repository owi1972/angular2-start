import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about.component';
import { ABOUT_RESOLVER_PROVIDERS } from './about.resolver';
import { AboutRoutingModule } from './about-routing.module';

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
    AboutRoutingModule
  ],
  providers: [
    ABOUT_PROVIDERS
  ]
})
export class AboutModule {}
