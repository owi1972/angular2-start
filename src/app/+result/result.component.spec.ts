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
import {
  Http,
  BaseRequestOptions,
} from '@angular/http';

import { ResultComponent } from './result.component';
import { environment } from '../environment';


describe('Component: Result', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    ResultComponent,
    provide(Http, {
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ResultComponent],
      (component: ResultComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should get Results', inject([ResultComponent, Http],
      (component: ResultComponent, http: Http) => {
    let query = 'foo';
    let search = { search: 'address=foo&sensor=false' };
    let fakeFn = () => {
      return {
        map: function(){
          return {
            subscribe: function(){}
          };
        }
      };
    };
    let spy = spyOn(http, 'get').and.callFake(fakeFn);
    component.getResults(query);
    expect(spy).toHaveBeenCalledWith(environment.apiUrl, search);
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

