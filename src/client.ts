import './shims/shims_for_IE.js';
import 'angular2-universal-preview/polyfills';
import {prebootComplete} from 'angular2-universal-preview';
import {provide} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app/app';
import {ENV} from './env';

bootstrap(App, [
  ...ROUTER_PROVIDERS,
  provide('config', { useValue: ENV.development })
])
.then(prebootComplete);
