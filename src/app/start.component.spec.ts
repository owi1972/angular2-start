import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StartAppComponent } from './start.component';

import { ROUTER_FAKE_PROVIDERS, } from '@angular/router/testing';
import { Router } from '@angular/router';

beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS, StartAppComponent]);

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

  it('should navigate to search page',
      inject([StartAppComponent, Router], (app: StartAppComponent, router: Router) => {
    let spy = spyOn(router, 'navigate');
    app.ngOnInit();
    expect(spy).toHaveBeenCalled();
  }));
});
