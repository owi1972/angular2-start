import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';

import {Search} from './search/search';
import {Results} from './results/results';
import {Version} from './version/version';


@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES,
    Search,
    Results,
    Version
  ],
  styles: [require('./app.less')],
  template: require('./app.html')
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
