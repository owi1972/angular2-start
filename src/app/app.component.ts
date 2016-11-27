import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <app-nav></app-nav>
  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent {}
