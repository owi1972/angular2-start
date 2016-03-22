'use strict'; 

describe('App', () => {

  beforeEach((done) => {
    browser.get('/home');
    $('router-outlet').isPresent().then(() => {
      done();
    }, () => {
      //error skipped
      done();
    });
  });

  it('should include name in footer text', () => {
    let el = element(by.css('footer p'));
    let result = 'SOON_';
    expect(el.getText()).toContain(result);
  });

});