import {
  Component, Input,
  Output, EventEmitter
} from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'todo',
  templateUrl: 'todo.template.html',
  styleUrls: ['todo.styles.scss']
})
export class TodoComponent {
  @Input() public item: Todo;
  @Input() public id: number;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<number>();

  edit() {
    this.onEdit.emit({ id: this.id, todo: this.item });
  }

  delete() {
    this.onDelete.emit(this.id);
  }
}
