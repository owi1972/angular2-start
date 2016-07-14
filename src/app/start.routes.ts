import { RouterConfig } from '@angular/router';
import { provideRouter } from '@angular/router';
import { SearchComponent } from './+search';
import { ResultComponent } from './+result';

const ROUTES: RouterConfig = [
  { path: '', redirectTo: 'search' },
  { path: 'search', component: SearchComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: '' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(ROUTES)
];
