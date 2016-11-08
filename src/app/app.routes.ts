import { Routes } from '@angular/router';

import { HomeComponent } from './home';


// async components must be named routes for WebpackAsyncRoute
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './+about/about.module#AboutModule' },
  { path: '**', redirectTo: '' }
];
