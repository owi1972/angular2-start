import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Router}    from 'angular2/router';
import {SearchForm}    from './search-form.model';

@Component({
  selector: 'search-form',
  templateUrl: 'src/app/search/search-form.component.html'
})
export class SearchFormComponent {
  model = new SearchForm(null);
  submitted = false;

  constructor(private _router: Router) { };
    
  onSubmit(query) {
    this.submitted = true;
    this._router.navigate( ['Results', { query: query }] );
  }
}
