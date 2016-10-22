/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>Angular 2 Start by <a [href]="url" target="_blank">@soonlondon</a></span>
      <div>
        <a [href]="url">
          <img [src]="soonLogo" width="256px">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  soonLogo = 'assets/img/soon.jpg';
  name = 'Angular 2 Start';
  url = 'https://twitter.com/soonlondon';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
