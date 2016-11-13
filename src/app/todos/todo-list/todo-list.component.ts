import {
  Component, Input,
  Output, EventEmitter
} from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.template.html'
})
export class TodoListComponent {
  @Input() public items: Todo[];
  @Output() onUpdate = new EventEmitter<Todo[]>()

  edit(item: { id: number, todo: Todo }) {
    this.items[item.id] = item.todo;
    this.onUpdate.emit(this.items);
  }

  delete(i: number) {
    this.items.splice(i, 1);
    this.onUpdate.emit(this.items);
  }
}
