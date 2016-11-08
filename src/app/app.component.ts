import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <nav class="navbar navbar navbar-dark bg-primary">
    <a
      class="navbar-brand"
      href="http://thisissoon.com/"
      target="_blank">
      SOON_
    </a>
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          [routerLink]="['/']"
          [routerLinkActive]="['active']"
          [routerLinkActiveOptions]="{ exact: true }">
          Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          [routerLink]="['about']"
          [routerLinkActive]="['active']">
          About
        </a>
      </li>
    </ul>
  </nav>
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  styles: [require('../scss/main.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
