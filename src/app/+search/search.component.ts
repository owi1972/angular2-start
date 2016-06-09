import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Search } from './shared/search.model';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  template: `
  <div class="container-fluid">

    <div class="row">
      <div class="col-xs-12">
        <div class="page-header">
          <h1>Search</h1>
        </div>
        <p class="lead">
          This is the home page in our angular app. Fill in the form to search locations
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">

        <form (ngSubmit)="onSubmit(search)"
              #searchForm="ngForm"
              novalidate>
          <pre class="model-display">search.query = "{{ search.query }}"</pre>

          <div class="form-group">
            <input id="query"
                   name="query"
                   type="text"
                   class="form-control input-lg"
                   [(ngModel)]="search.query"
                   ngControl="query"
                   placeholder="Search location"
                   required
                   autofocus>
          </div>
          <button type="submit"
                  class="btn btn-lg btn-default"
                  [disabled]="!searchForm.form.valid">
            Submit
          </button>
        </form>

      </div>
    </div>

  </div>
  `,
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
