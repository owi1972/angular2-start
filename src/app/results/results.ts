import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';

@Component({
  selector: 'results',
  styleUrls: ['src/app/results/results.css'],
  templateUrl: 'src/app/results/results.html',
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
      .do(data => console.log(data))
      .subscribe(data => this.results = data.results);
  };
  
  ngOnInit() {
    console.log('hello `Results` component');
  };
}
