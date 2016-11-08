import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about.component';
import { ABOUT_RESOLVER_PROVIDERS } from './about.resolver';
import { AboutRoutingModule } from './about-routing.module';

const ABOUT_PROVIDERS = [
  ...ABOUT_RESOLVER_PROVIDERS,
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AboutComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    AboutRoutingModule
  ],
  providers: [
    ABOUT_PROVIDERS
  ]
})
export class AboutModule {}
