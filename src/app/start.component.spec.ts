import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { StartAppComponent } from './start.component';
import { APP_ROUTER_PROVIDERS } from './start.routes';

beforeEachProviders(() => [
  ...APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  StartAppComponent
]);

describe('App: Start', () => {
  it('should create the app',
      inject([StartAppComponent], (app: StartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have a name and url',
      inject([StartAppComponent], (app: StartAppComponent) => {
    expect(app.name).toEqual('SOON_');
    expect(app.url).toEqual('http://thisissoon.com');
  }));

});
