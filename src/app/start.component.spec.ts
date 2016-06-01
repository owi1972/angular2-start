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
});
