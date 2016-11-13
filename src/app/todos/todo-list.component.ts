import { Component, Input } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.template.html'
})
export class TodoListComponent {

  @Input() public items: Todo[];
}
