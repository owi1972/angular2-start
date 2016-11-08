import { Injectable } from '@angular/core';

@Injectable()
export abstract class StoreService {
  abstract storeName: string;

  abstract set store(value: any);

  abstract get store(): any;

  abstract get(key: string): any;

  abstract set(key: string, value: any): any;

  abstract delete(key: string): any

}
