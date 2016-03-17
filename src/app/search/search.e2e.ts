'use strict'; 

describe('Search', () => {

  beforeEach((done) => {
    browser.get('/search');
    $('body').isPresent().then(()=> {
      done();
    }, () => {
      //error skipped
      done();
    });
  });

  it('should have title Search', () => {
    let el = element(by.css('h1'));
    let result = 'Search';
    expect(el.getText()).toBe(result);
  });

});