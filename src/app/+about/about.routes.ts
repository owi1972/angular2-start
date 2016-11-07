import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutResolver } from './about.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full',
    resolve: {
      about: AboutResolver
    }
  }
];
