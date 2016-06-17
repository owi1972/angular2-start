import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, URLSearchParams } from '@angular/http';

import { Router, ROUTER_PRIMARY_COMPONENT, RouteParams } from '@angular/router-deprecated';
import { RootRouter } from '@angular/router-deprecated/src/router';
import { Location, APP_BASE_HREF } from '@angular/common';

import { ResultComponent } from './result.component';
import { environment } from '../environment';


describe('Component: Result', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    ResultComponent,
    MockBackend,
    BaseRequestOptions,
    provide(RouteParams, { useValue: new RouteParams({ query: 'foo' }) }),
    provide(Http, {
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    Location,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(Router, { useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: ResultComponent})
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ResultComponent],
      (component: ResultComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should get Results', inject([ResultComponent, Http, RouteParams],
      (component: ResultComponent, http: Http, params: RouteParams) => {

    let query = 'foo';
    let searchParams = new URLSearchParams();
    searchParams.set('address', query);
    searchParams.set('sensor', 'false');
    let observable =  {
      map: (fn) => { fn({ json: () => {}}); return observable; },
      subscribe: ( fn1, fn2 ) => {
        fn1({ results: [] });
        fn2({ results: [] });
        return observable;
      }
    };
    let spy = spyOn(http, 'get').and.returnValue(observable);
    component.getResults(query);
    expect(spy).toHaveBeenCalledWith(environment.apiUrl, { search: searchParams });

  }));

  it('should call getResults on "onActivate" hook', inject([ResultComponent],
      (component: ResultComponent) => {
    let spy = spyOn(component, 'getResults');
    component.routerOnActivate();
    expect(spy).toHaveBeenCalled();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ResultComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ResultComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-result></app-result>
  `,
  directives: [ResultComponent]
})
class ResultComponentTestController {
}

