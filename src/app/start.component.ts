import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { SearchComponent } from './+search/search.component';
import { ResultComponent } from './+result/result.component';

@Component({
  moduleId: module.id,
  selector: 'start-app',
  template: `
  <router-outlet></router-outlet>
  <p class="made-with text-center">
    Made with 💙 &amp; 🍺 by <a [href]="url" target="_blank">{{ name }}</a>
  </p>
  `,
  styles: [],
  directives: [
    ...ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/', name: 'Search', component: SearchComponent, useAsDefault: true},
  {path: '/result', name: 'Result', component: ResultComponent}
])
export class StartAppComponent {
  name: string = 'SOON_';
  url: string = 'http://thisissoon.com';
}
