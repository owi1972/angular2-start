import {Component} from 'angular2/core';

@Component({
  selector: 'search',
  styleUrls: ['src/app/search/search.css'],
  templateUrl: 'src/app/search/search.html'
})
export class Search {
  ngOnInit() {
    console.log('hello `Search` component');
  }
}
