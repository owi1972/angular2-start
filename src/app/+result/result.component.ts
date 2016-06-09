import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams, OnActivate } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { environment } from '../environment';
import { Location } from './shared/location.model';

import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-result',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12">

        <div class="page-header">
          <h1>
            Results
            <small class="badge">{{ results.length || 0 }}</small>
          </h1>
        </div>

        <p class="lead">
          This is a second view in our angular app. This view displays the results of the search. Click here to return to our <a [routerLink]="['Search']">search page</a>
        </p>

        <pre class="result-item"
            *ngFor="let result of results; let i = index">{{ i + 1 }}: {{ result.formatted_address }}</pre>
        <p *ngIf="!results.length"
          class="alert alert-info"
          role="alert">
          No results
        </p>

      </div>
    </div>
  </div>
  `,
  styles: [],
  directives: [ ...ROUTER_DIRECTIVES ],
  providers: [ ...HTTP_PROVIDERS ]
})
export class ResultComponent implements OnActivate {

  results: Array<Location> = [];

  constructor(
    private http: Http,
    private params: RouteParams
  ) {};

  routerOnActivate() {
    let query = this.params.get('query');
    this.getResults(query);
  };

  getResults(query: String) {
    this.http.get(environment.apiUrl, {
      search: 'address=' + query + '&sensor=false'
    })
      .map(res => res.json())
      .subscribe(data => this.results = data.results);
  };

}
