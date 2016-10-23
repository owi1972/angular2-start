import { Component } from '@angular/core';

import { AppState } from '../app.service';

interface Task {
  title: string;
  done: boolean;
}

@Component({
  selector: 'home',
  styleUrls: [ './home.styles.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent {

  public localState = { value: '' };

  private tasks: Task[] = [];

  constructor(public appState: AppState) {}

  addTask(title: string) {
    let task: Task = {
      title: title,
      done: false
    };
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = value;
  }
}
