import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'home',
  styleUrls: [ './home.styles.scss' ],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
  _todos: Todo[] = [];
  title: string = '';
  storeName: string = 'todos';

  constructor(public store: StoreService) {}

  ngOnInit() {
    this._todos = this.store.get(this.storeName) || [];
  }

  get todos(): Todo[] {
    return this._todos || [];
  }

  set todos(value) {
    this._todos = value;
    this.store.set(this.storeName, value);
  }

  add(title: string) {
    let todo: Todo = { title: title, done: false };
    let todos = this.todos;
    todos.push(todo);
    this.todos = todos;
    this.title = '';
  }

  edit(i: number, todo: Todo) {
    let todos = this.todos;
    todos[i] = todo;
    this.todos = todos;
  }

  delete(i: number) {
    let todos = this.todos;
    todos.splice(i, 1);
    this.todos = todos;
  }
}
