import { enableProdMode } from '@angular/core';
import { prebootComplete } from 'angular2-universal';
import { environment } from './app';
import { ngApp } from './main.browser';

if (environment.production) {
  // enable prod for faster renders
  enableProdMode();
}

function main() {
  ngApp()
    .then(prebootComplete);
}

// on document ready bootstrap Angular 2
if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
