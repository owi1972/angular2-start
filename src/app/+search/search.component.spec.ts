import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT, RouteParams } from '@angular/router-deprecated';
import { RootRouter } from '@angular/router-deprecated/src/router';
import { Location, APP_BASE_HREF } from '@angular/common';

import { SearchComponent } from './search.component';
import { Search } from './shared/search.model';

describe('Component: Search', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    SearchComponent,
    RouteRegistry,
    Location,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(Router, { useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: SearchComponent})
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SearchComponent],
      (component: SearchComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should have default data', inject([SearchComponent],
      (component: SearchComponent) => {
      let search = new Search(null);
      expect(component.search).toEqual(search);
    }
    ));

  it('should navigate to results page on submit',
    inject([SearchComponent, Router], (component: SearchComponent, router: Router) => {
      let spy = spyOn(router, 'navigate');
      let search = { query: 'london' };
      expect(spy).not.toHaveBeenCalled();

      component.onSubmit(search);
      expect(spy).toHaveBeenCalledWith(['Result', search]);
      expect(component.submitted).toBeTruthy();
    }
  ));

  it('should create the component', inject([], () => {
    return builder.createAsync(SearchComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SearchComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

});

@Component({
  selector: 'test',
  template: `
    <app-search></app-search>
  `,
  directives: [SearchComponent]
})
class SearchComponentTestController {
}

