import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Todo } from './todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ]
})
export class TodosComponent implements OnInit {
  public items: Todo[] = [];
  title: string = '';
  important: boolean = false;
  storeName: string = 'todos';

  constructor(public store: StoreService) { }

  ngOnInit(): void {
    this.items = this.store.get(this.storeName);
  }

  get todos(): Todo[] {
    return this.items || [];
  }

  set todos(value) {
    this.items = value;
    this.store.set(this.storeName, value);
  }

  add(todo: Todo): void {
    let item: Todo = todo;
    let items = this.todos;
    items.push(item);
    this.title = '';
    this.todos = items;
  }

  save(todos: Todo[]): void {
    this.todos = todos;
  }

}
