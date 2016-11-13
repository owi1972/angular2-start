import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosComponent
  ],
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoComponent
  ]
})
export class TodosModule {}
