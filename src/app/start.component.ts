import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

import { SearchComponent } from './+search';
import { ResultComponent } from './+result';

@Component({
  moduleId: module.id,
  selector: 'start-app',
  template: `
  <router-outlet></router-outlet>
  <p class="made-with text-center">
    Made by <a [href]="url" target="_blank">{{ name }}</a>
  </p>
  `,
  styles: [],
  directives: [
    ...ROUTER_DIRECTIVES
  ]
})
export class StartAppComponent {
  name: string = 'SOON_';
  url: string = 'http://thisissoon.com';
}
