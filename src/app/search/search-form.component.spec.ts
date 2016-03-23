import {
  it,
  inject,
  describe,
  beforeEachProviders,
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import {RouteRegistry} from 'angular2/src/router/route_registry';
import {
  Router,
  Location,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';


// Load the implementations that should be tested
import {App} from '../app';
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
      inject([SearchFormComponent, Router], (sfc: SearchFormComponent, _router: Router) => {
        spyOn(_router, 'navigate');
        expect(_router.navigate).not.toHaveBeenCalled();

        sfc.onSubmit('london');
        expect(_router.navigate).toHaveBeenCalledWith(['Results', { query: 'london' }]);
        expect(sfc.submitted).toBeTruthy();
      }
      ));

  });
}


