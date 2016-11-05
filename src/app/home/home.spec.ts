import { inject, TestBed } from '@angular/core/testing';


// Load the implementations that should be tested
import { HomeComponent } from './home.component';
import { Todo } from './todo.model';
import { StoreService } from '../store/store.service';

let todos: Todo[] = [
  { title: 'task1', done: true },
  { title: 'task2', done: false },
  { title: 'task3', done: false }
];
describe('HomeComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StoreService,
      HomeComponent
    ]
  }));

  it('should have default data', inject([ HomeComponent, StoreService ], (home: HomeComponent, store: StoreService) => {
    expect(home._todos).toEqual([]);
    expect(home.title).toEqual('');
  }));

  it('should get todos from store', inject([ HomeComponent, StoreService ], (home: HomeComponent, store: StoreService) => {
    let spy = spyOn(home.store, 'get').and.callFake(() => {
      return todos;
    });
    expect(spy).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(spy).toHaveBeenCalledWith(home.storeName);
    expect(home._todos).toEqual(todos);
  }));

});
