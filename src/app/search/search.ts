import {Component} from 'angular2/core';
import {SearchFormComponent} from './search-form.component';

@Component({
  selector: 'search',
  directives: [SearchFormComponent],
  styleUrls: ['src/app/search/search.css'],
  templateUrl: 'src/app/search/search.html'
})
export class Search {
  ngOnInit() {
    console.log('hello `Search` component');
  }
}
