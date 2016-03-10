import {provide} from 'angular2/core';
import {bootstrap} from 'angular2-universal-preview';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app/app';
import {ENV} from './env';

bootstrap(App, [
  ...ROUTER_PROVIDERS,
  provide('config', { useValue: ENV.development }),
]);
