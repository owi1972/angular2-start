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
import { Router, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Location, APP_BASE_HREF } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { StartAppComponent } from '../start.component';
import { ResultComponent } from './result.component';
import { environment } from '../environment';


describe('Component: Result', () => {
  let builder: TestComponentBuilder;

  class MockActivatedRoute extends ActivatedRoute {
    constructor() {
      super();
      this.params = new Observable(observer => {
        observer.next({query: 'foo'});
      });
    }
  }

  beforeEachProviders(() => [
    ResultComponent,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    Location,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(ActivatedRoute, { useClass: MockActivatedRoute }),
    provide(PRIMARY_OUTLET, { useValue: StartAppComponent })
  ]);
  beforeEach(inject([TestComponentBuilder, ActivatedRoute], function (tcb: TestComponentBuilder, ar: MockActivatedRoute) {
    builder = tcb;
  }));

  it('should inject the component', inject([ResultComponent],
      (component: ResultComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should get Results', inject([ResultComponent, Http, ActivatedRoute],
      (component: ResultComponent, http: Http, params: ActivatedRoute) => {

    let query = 'foo';
    let searchParams = new URLSearchParams();
    searchParams.set('address', query);
    searchParams.set('sensor', 'false');
    let observable =  {
      map: (fn) => { fn({ json: () => {}}); return observable; },
      subscribe: fn1 => {
        fn1({ results: [] });
        return observable;
      }
    };
    let spy = spyOn(http, 'get').and.returnValue(observable);
    component.getResults(query);
    expect(spy).toHaveBeenCalledWith(environment.apiUrl, { search: searchParams });

  }));

  it('should call getResults on "onInit" hook', inject([ResultComponent],
      (component: ResultComponent) => {
    let spy = spyOn(component, 'getResults');
    component.ngOnInit();
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

