import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable()
export class BrowserStoreService extends StoreService {

  storeName = 'appData';

  set store(value: any) {
    localStorage.setItem(this.storeName, JSON.stringify(value));
  }

  get store(): any {
    let store = localStorage.getItem(this.storeName);
    return typeof store === 'string' ? JSON.parse(store) : {};
  }

  public get(key: string): any {
    let store = this.store;
    return store[key] ? store[key] : undefined;
  }

  public set(key: string, value: any): any {
    let store = this.store;
    store[key] = value;
    this.store = store;
    return this;
  };

  public delete(key: string): any {
    let store = this.store;
    if (store[key]) {
      delete store[key];
    }
    this.store = store;
    return this;
  }

}
