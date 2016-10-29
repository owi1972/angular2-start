import { Component, OnInit } from '@angular/core';

import { StoreService } from '../store';

interface Todo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'home',
  styleUrls: [ './home.styles.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
  _todos: Todo[];
  title: string;

  constructor(protected store: StoreService) {}

  ngOnInit() {
    this._todos = this.store.get('todos');
  }

  get todos(): Todo[] {
    return this._todos || [];
  }

  set todos(value) {
    this._todos = value;
    this.store.set('todos', value);
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
