import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { SearchComponent } from './+search/search.component';
import { ResultComponent } from './+result/result.component';

@Component({
  moduleId: module.id,
  selector: 'start-app',
  template: `
  <p *shellRender class="text-center">Loading&#8230;<p>
  <router-outlet *shellNoRender></router-outlet>
  <p *shellNoRender class="made-with text-center">
    Made with 💙 &amp; 🍺 by <a [href]="url" target="_blank">{{ name }}</a>
  </p>
  `,
  styles: [],
  directives: [
    ...APP_SHELL_DIRECTIVES,
    ...ROUTER_DIRECTIVES
  ],
  providers: [
    ...ROUTER_PROVIDERS
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
