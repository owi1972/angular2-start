import { Routes } from '@angular/router';

import { HomeComponent } from './home';


// async components must be named routes for WebpackAsyncRoute
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about', loadChildren: () => System.import('./+about').then((comp: any) => {
      return comp.default;
    })
  },
  { path: '**', redirectTo: '' }
];
