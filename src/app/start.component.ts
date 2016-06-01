import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, Routes } from '@angular/router';

import { SearchComponent } from './+search/search.component';
import { ResultComponent } from './+result/result.component';


@Component({
  moduleId: module.id,
  selector: 'start-app',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: SearchComponent},
  {path: '/result', component: ResultComponent}
])
export class StartAppComponent{

  name: string = 'SOON_';
  url: string = 'http://thisissoon.com';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/']);
  }
}
