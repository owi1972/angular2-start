import { NgModule, ApplicationRef, Inject, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
// for AoT we need to manually split universal packages
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser';

/*
 * Platform and Environment providers/directives/pipes
 */
import { BROWSER_ENV_PROVIDERS } from './environment.browser';
import { AppRoutingModule } from './app-routing.module';
// App is our top level component
import { AppComponent } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { HomeModule } from './home';
import { AboutModule } from './about';
import { StoreService, BrowserStoreService } from './store/';
import { TitleService } from './title';
import { CacheService } from './shared/cache.service';

import * as LRU from 'modern-lru';

export function getLRU() {
  return new Map();
}

// TODO(gdi2290): refactor into Universal
export const UNIVERSAL_KEY = 'UNIVERSAL_CACHE';

// Application wide providers
const APP_PROVIDERS = [
  CacheService,
  AppState,
  { provide: StoreService, useClass: BrowserStoreService },
  { provide: 'isBrowser', useValue: isBrowser },
  { provide: 'isNode', useValue: isNode },
  { provide: 'LRU', useFactory: getLRU, deps: [] }
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    BrowserModule,
    RouterModule,
    FormsModule,

    HomeModule,
    AboutModule,
    AppRoutingModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ...BROWSER_ENV_PROVIDERS,
    ...APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    public appState: AppState,
    public cache: CacheService
  ) {
    // TODO(gdi2290): refactor into a lifecycle hook
    this.doRehydrate();
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

  doRehydrate() {
    let defaultValue = {};
    let serverCache = this._getCacheValue(CacheService.KEY, defaultValue);
    this.cache.rehydrate(serverCache);
  }

  _getCacheValue(key: string, defaultValue: any): any {
    // browser
    const win: any = window;
    if (win[UNIVERSAL_KEY] && win[UNIVERSAL_KEY][key]) {
      let serverCache = defaultValue;
      try {
        serverCache = JSON.parse(win[UNIVERSAL_KEY][key]);
        if (typeof serverCache !== typeof defaultValue) {
          console.log('Angular Universal: The type of data from the server is different from the default value type');
          serverCache = defaultValue;
        }
      } catch (e) {
        console.log('Angular Universal: There was a problem parsing the server data during rehydrate');
        serverCache = defaultValue;
      }
      return serverCache;
    } else {
      console.log('Angular Universal: UNIVERSAL_CACHE is missing');
    }
    return defaultValue;
  }

}

