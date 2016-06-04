import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Search } from './shared/search.model';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styles: []
})
export class SearchComponent {
  search: Search = new Search(null);
  submitted: Boolean = false;

  constructor(
    private router: Router
  ) {};

  onSubmit(search: Search) {
    this.submitted = true;
    this.router.navigate( ['Result', search] );
  };
}
