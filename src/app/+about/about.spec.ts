import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AboutComponent
    ]}));

  it('should exist', inject([ AboutComponent ], (about: AboutComponent) => {
    expect(about).toBeTruthy();
  }));

});
