import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StartAppComponent } from './start.component';

import { provideRouter } from '@angular/router';

beforeEachProviders(() => [
  provideRouter(routes),
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
