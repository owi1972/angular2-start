import {Component} from 'angular2/core';
import {SearchFormComponent} from './search-form.component';

@Component({
  selector: 'search',
  directives: [SearchFormComponent],
  template: require('./search.html')
})
export class Search { }
