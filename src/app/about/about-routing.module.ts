import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutResolver } from './about.resolver';

const ROUTES: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
    resolve: {
      about: AboutResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutRoutingModule {}
