import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: [ '../scss/main.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
