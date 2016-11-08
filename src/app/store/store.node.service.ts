import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable()
export class NodeStoreService extends StoreService {

  storeName = 'appData';

  set store(value: any) {
    return;
  }

  get store(): any {
    return {};
  }

  public get(key: string): any {
    return undefined;
  }

  public set(key: string, value: any): any {
    return this;
  };

  public delete(key: string): any {
    return this;
  }

}
