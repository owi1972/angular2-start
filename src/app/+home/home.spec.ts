import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';
import { Todo } from '../todos/todo.model';
import { StoreService } from '../store/store.service';

let todos: Todo[];
let spyStoreGet;

describe('HomeComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StoreService,
      HomeComponent
    ]
  }));

  beforeEach(inject([ HomeComponent ], (home: HomeComponent) => {
    todos = [
      { title: 'task1', done: true },
      { title: 'task2', done: false },
      { title: 'task3', done: false }
    ];
    spyStoreGet = spyOn(home.store, 'get').and.callFake(() => {
      return todos;
    });
    home.ngOnInit();
  }));

  it('should have default data', inject([ HomeComponent ], (home: HomeComponent) => {
    expect(home.todos).toEqual(todos);
    expect(home.title).toEqual('');
  }));

  it('should get todos from store', inject([ HomeComponent ], (home: HomeComponent) => {
    spyStoreGet.calls.reset();

    home.ngOnInit();
    expect(spyStoreGet).toHaveBeenCalledWith(home.storeName);
    expect(home._todos).toEqual(todos);
  }));

  it('should always return an array', inject([ HomeComponent ], (home: HomeComponent) => {
    home._todos = null;
    expect(home._todos).toBeNull();
    expect(home.todos).toEqual([]);
  }));

  it('should add item to todos list', inject([ HomeComponent ], (home: HomeComponent) => {
    expect(home.todos.length).toEqual(3);

    home.add('task 4');
    expect(home.todos.length).toEqual(4);
    expect(home.todos[3]).toEqual(<Todo>{ title: 'task 4', done: false });
  }));

  it('should edit item in todos list', inject([ HomeComponent ], (home: HomeComponent) => {

    let todo: Todo = { title: 'Task 1 Edited', done: false };
    expect(home.todos[0]).not.toEqual(todo);

    home.edit(0, todo);
    expect(home.todos.length).toEqual(3);
    expect(home.todos[0]).toEqual(todo);
  }));

  it('should delete item in todos list', inject([ HomeComponent ], (home: HomeComponent) => {

    let todo = todos[0];

    expect(home.todos.length).toEqual(3);
    expect(home.todos[0]).toEqual(todo);

    home.delete(0);
    expect(home.todos.length).toEqual(2);
    expect(home.todos[0]).not.toEqual(todo);
  }));

});
