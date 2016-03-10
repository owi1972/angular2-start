import {Component, ElementRef, Renderer} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';

import {Search} from './search/search';
import {Results} from './results/results';


@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES,
    Search,
    Results
  ],
  styleUrls: ['src/app/app.css'],
  template: `
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', component: Search, name: 'Search', useAsDefault: true },
  { path: '/search', component: Search, name: 'Search' },
  { path: '/results', component: Results, name: 'Results' },
  { path: '/**', redirectTo: ['Search'] }
])
export class App {
  name: string = 'SOON_';
}
