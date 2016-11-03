import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';
import { Todo } from './todo.model';
import { StoreService } from '../store';

describe('HomeComponent', () => {
  let todos: Todo[] = [
    { title: 'task1', done: true },
    { title: 'task2', done: false },
    { title: 'task3', done: false }
  ];
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      {
        provide: StoreService,
        useClass: class {
          get(key: string) { return todos; }
          set(key: string) { }
        }
      },
      HomeComponent
    ]
  }));

  it('should have default data', inject([ HomeComponent ], (home: HomeComponent) => {
    expect(home._todos).toEqual([]);
    expect(home.title).toEqual('');
  }));

  it('should log ngOnInit', inject([ HomeComponent ], (home: HomeComponent) => {
    let spy = spyOn(home.store, 'get').and.callThrough();
    expect(spy).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(spy).toHaveBeenCalledWith(home.storeName);
    expect(home._todos).toEqual(todos);
  }));

});
