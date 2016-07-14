import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

import { routes } from './start.routes';
import { SearchComponent } from './+search/search.component';
import { ResultComponent } from './+result/result.component';

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
