import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Search } from './shared/search.model';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  search = new Search(null);
  submitted = false;

  constructor(
    private router: Router
  ) {};

  onSubmit(search: Search) {
    this.submitted = true;
    this.router.navigate( ['/result', search] );
  };
}
