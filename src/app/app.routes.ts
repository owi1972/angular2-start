import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  {
    path: 'about', loadChildren: () => System.import('./+about').then((comp: any) => {
      return comp.default;
    })
  },
  { path: '**',    redirectTo: '' }
];
