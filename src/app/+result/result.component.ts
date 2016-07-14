import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';

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
          This is a second view in our angular app. This view displays the results of
          the search. Click here to return to our <a [routerLink]="['/search']">search page</a>
        </p>

        <ul class="list-group" *ngIf="results.length">
          <li class="list-group-item"
              *ngFor="let result of results; let i = index">
            {{ i + 1 }}: {{ result.formatted_address }}
          </li>
        </ul>

        <p class="alert alert-info"
           *ngIf="!results.length"
           [ngSwitch]="loading"
           role="alert">
          <span *ngSwitchCase="false">No results</span>
          <span *ngSwitchCase="true">Loading&#8230;</span>
        </p>


      </div>
    </div>
  </div>
  `,
  styles: [],
  directives: [ ...ROUTER_DIRECTIVES ]
})
export class ResultComponent implements OnInit {

  results: Array<Location> = [];
  loading: Boolean = true;

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      let query = params['query'];
      this.getResults(query);
    });
  };

  getResults(query: string) {
    let searchParams = new URLSearchParams();
    searchParams.set('address', query);
    searchParams.set('sensor', 'false');

    this.http
        .get(environment.apiUrl, {
          search: searchParams
        })
        .map(res => res.json())
        .subscribe(data => {
            this.results = data.results;
            this.loading = false;
          }
        );
  };

}
