import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoListComponent
  ],
  declarations: [
    TodoListComponent
  ]
})
export class TodosModule {}
