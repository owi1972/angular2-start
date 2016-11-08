import { NgModule, Inject, Optional, SkipSelf, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// for AoT we need to manually split universal packages
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node';


/*
 * Platform and Environment providers/directives/pipes
 */
import { NODE_ENV_PROVIDERS } from './environment.node';
// App is our top level component
import { AppComponent } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home';
import { AboutModule } from './about';
import { StoreService, NodeStoreService } from './store';
import { CacheService } from './shared/cache.service';

import * as LRU from 'modern-lru';

export function getLRU(lru?: any) {
  // use LRU for node
  return lru || new LRU(10);
}


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  CacheService,
  { provide: StoreService, useClass: NodeStoreService },
  { provide: 'isBrowser', useValue: isBrowser },
  { provide: 'isNode', useValue: isNode },
  { provide: 'LRU', useFactory: getLRU, deps: [] }
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  providers: [
    ...NODE_ENV_PROVIDERS,
    ...APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public cache: CacheService) {

  }

  /**
   * We need to use the arrow function here to bind the context as this is a gotcha
   * in Universal for now until it's fixed
   */
  universalDoDehydrate = (universalCache) => {
    universalCache[CacheService.KEY] = JSON.stringify(this.cache.dehydrate());
  }

 /**
  * Clear the cache after it's rendered
  */
  universalAfterDehydrate = () => {
    // comment out if LRU provided at platform level to be shared between each user
    this.cache.clear();
  }
}
