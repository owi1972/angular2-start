import { Component } from '@angular/core';

interface Todo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'home',
  styleUrls: [ './home.styles.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent {
  todos: Todo[] = [];
  title: '';

  add(title: string) {
    let todo: Todo = { title: title, done: false };
    this.todos.push(todo);
    this.title = '';
  }

  delete(i: number) {
    this.todos.splice(i, 1);
  }
}
