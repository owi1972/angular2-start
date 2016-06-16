// Angular 2 Universal
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

// Application
import { StartAppComponent } from './app/';

// you must return bootstrap for client.ts
export function ngApp() {
  return bootstrap(StartAppComponent, [
    ...ROUTER_PROVIDERS,
    ...HTTP_PROVIDERS
  ]);
}
