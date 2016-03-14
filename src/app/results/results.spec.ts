import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder,
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouteParams,
  RouteData,
  Location,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';
import {
  RouteConfig,
  Route,
  AuxRoute,
  AsyncRoute,
  Redirect
} from 'angular2/src/router/route_config_decorator';
import {RouteRegistry} from 'angular2/src/router/route_registry';
import {DirectiveResolver} from 'angular2/src/core/linker/directive_resolver';

// Load the implementations that should be tested
import {Results} from './results';
import {App} from '../app';

describe('Results', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    provide(Location, { useClass: SpyLocation }),
    provide(ROUTER_PRIMARY_COMPONENT, { useValue: App }),
    provide(Router, { useClass: RootRouter }),
    provide(RouteParams, { useValue: new RouteParams({ query: 'foo' }) }),
    Results
  ]);

  // it('should have default data',
  //   inject([Results, MockBackend, Http, RouteParams],
  //          (results, mockBackend, http, routeParams) => {
  //     let connection;
  //     connection = mockBackend.connections.subscribe(c => connection = c);
  //     results = new Results(http, routeParams);
  //     connection.mockRespond(200,[123, 456]);
  //     expect(results.results).toEqual([]);
  //   }
  // ));

});
