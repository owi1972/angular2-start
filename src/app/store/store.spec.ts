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

import { BrowserStoreService } from './store.browser.service';

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
      BrowserStoreService
    ]
  }));

  beforeEach(() => {
    localStorage.clear();
  });

  it('should have store name', inject([ BrowserStoreService ], (store: BrowserStoreService) => {
    expect(store.storeName).toEqual('appData');
  }));

  it('should get data from storage', inject([ BrowserStoreService ], (store: BrowserStoreService) => {
    let spy = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ foo: 'bar' });
    });
    let result = store.get('foo');

    expect(spy).toHaveBeenCalledWith(store.storeName);
    expect(result).toEqual('bar');
  }));

  it('should return undefined', inject([ BrowserStoreService ], (store: BrowserStoreService) => {
    let spy = spyOn(localStorage, 'getItem').and.callFake(() => {
      return undefined;
    });
    let result = store.get('foo');
    expect(result).toBeUndefined();
  }));

  it('should set data to storage', inject([ BrowserStoreService ], (store: BrowserStoreService) => {
    let spySet = spyOn(localStorage, 'setItem');
    let spyGet = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ foo: 'bar' });
    });
    let result = JSON.stringify({ foo: 'bar', foo2: 'bar2' });
    store.set('foo2', 'bar2');
    expect(spySet).toHaveBeenCalledWith(store.storeName, result);
  }));

  it('should delete data from storage', inject([ BrowserStoreService ], (store: BrowserStoreService) => {
    let spySet = spyOn(localStorage, 'setItem');
    let spyGet = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ foo: 'bar', foo2: 'bar2' });
    });
    let result = JSON.stringify({ foo2: 'bar2' });
    store.delete('foo');
    expect(spySet).toHaveBeenCalledWith(store.storeName, result);
  }));

  it('should delete nothing', inject([ BrowserStoreService ], (store: BrowserStoreService) => {
    let spySet = spyOn(localStorage, 'setItem');
    let spyGet = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ foo: 'bar', foo2: 'bar2' });
    });
    let result = JSON.stringify({ foo: 'bar', foo2: 'bar2' });
    store.delete('foo3');
    expect(spySet).toHaveBeenCalledWith(store.storeName, result);
  }));

});
