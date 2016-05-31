import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StartAppComponent } from '../app/start.component';

beforeEachProviders(() => [StartAppComponent]);

describe('App: Angular2Start', () => {
  it('should create the app',
      inject([StartAppComponent], (app: StartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-start works!\'',
      inject([StartAppComponent], (app: StartAppComponent) => {
    expect(app.title).toEqual('angular2-start works!');
  }));
});
