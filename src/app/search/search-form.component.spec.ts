import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';
import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import {RouteRegistry} from 'angular2/src/router/route_registry';
import {DirectiveResolver} from 'angular2/src/core/linker/directive_resolver';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouteParams,
  RouteData,
  Location,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';


// Load the implementations that should be tested
import {App} from '../app';
import {Search} from './search';
import {SearchFormComponent} from './search-form.component';

export function main() {
  describe('SearchFormComponent', () => {
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
      RouteRegistry,
      provide(Location, { useClass: SpyLocation }),
      provide(ROUTER_PRIMARY_COMPONENT, { useValue: App }),
      provide(Router, { useClass: RootRouter }),
      SearchFormComponent
    ]);

    it('should have default data',
      inject([SearchFormComponent], (sfc: SearchFormComponent) => {
        expect(sfc.model.query).toEqual(null);
      }
      ));

    it('should navigate to results page on submit',
      inject([SearchFormComponent], (sfc: SearchFormComponent) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        sfc.onSubmit('london');
        expect(console.log).toHaveBeenCalledWith('london');
        expect(sfc.submitted).toBeTruthy();
      }
      ));

  });
}


