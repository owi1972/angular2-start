import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'results',
  template: require('./results.html'),
  providers: [HTTP_PROVIDERS],
  directives: [
    ...ROUTER_DIRECTIVES
  ],
})
export class Results {
  results = [];

  constructor(http: Http, params: RouteParams) {
    http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      search: 'address=' + params.get('query') + '&sensor=false'
    })
      .map(res => res.json())
      .subscribe(data => this.results = data.results);
  };
}
