import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// Application
import { StartAppComponent, APP_ROUTER_PROVIDERS } from './app';

// you must return bootstrap for client.ts
export function ngApp() {
  return bootstrap(StartAppComponent, [
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
  ]);
}
