import {provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {RootRouter} from 'angular2/src/router/router';
import {RouteRegistry} from 'angular2/src/router/route_registry';


import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';
import {MockBackend} from 'angular2/http/testing';
import {SpyLocation} from 'angular2/src/mock/location_mock';

import {
  Router,
  RouteParams,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

// Load the implementations that should be tested
import {App} from '../app';
import {Results} from './results';

export function main() {

  describe('Results', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
      BaseRequestOptions,
      MockBackend,
      provide(RouteParams, { useValue: new RouteParams({ query: 'foo' }) }),
      provide(Http, {
        useFactory: function(backend, defaultOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }),
      RouteRegistry,
      provide(Location, { useClass: SpyLocation }),
      provide(ROUTER_PRIMARY_COMPONENT, { useValue: App }),
      provide(Router, { useClass: RootRouter }),
      provide(Results, {
        useFactory: function(Http, RouteParams) {
          return new Results(Http, RouteParams);
        },
        deps: [Http, RouteParams]
      })
    ]);

    it('should have a name', inject([Results], (results) => {
      expect(results.results).toEqual([]);
    }));

  });
}


