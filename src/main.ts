import {
  bootstrap,
  enableProdMode,
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import { StartAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(StartAppComponent, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS
]);

