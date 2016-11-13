import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Todo } from './todo/todo.model';

@Component({
  selector: 'todos',
  templateUrl: 'todos.template.html',
  styleUrls: ['todos.styles.scss']
})
export class TodosComponent implements OnInit {
  public items: Todo[] = [];
  title: string = '';
  storeName: string = 'todos';

  constructor(public store: StoreService) {}

  ngOnInit() {
    this.items = this.store.get(this.storeName);
  }

  get todos(): Todo[] {
    return this.items || [];
  }

  set todos(value) {
    this.items = value;
    this.store.set(this.storeName, value);
  }

  add(title: string) {
    let item: Todo = { title: title, done: false };
    let items = this.todos;
    items.push(item);
    this.title = '';
    this.todos = items;
  }

  save(todos: Todo[]) {
    this.todos = todos;
  }

}
