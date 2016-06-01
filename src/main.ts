import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { StartAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(StartAppComponent, [ROUTER_PROVIDERS]);
