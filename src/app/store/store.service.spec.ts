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

import { StoreService } from './store.service';

describe('StoreService', () => {
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
      StoreService
    ]
  }));

  beforeEach(() => {
    localStorage.clear();
  });

  it('should have store name', inject([ StoreService ], (store: StoreService) => {
    expect(store.storeName).toEqual('appData');
  }));

  it('should get data from storage', inject([ StoreService ], (store: StoreService) => {
    let spy = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ foo: 'bar' });
    });
    let result = store.get('foo');

    expect(spy).toHaveBeenCalledWith(store.storeName);
    expect(result).toEqual('bar');
  }));

});
