'use strict'; 

describe('Results', () => {

  beforeEach((done) => {
    browser.get('/results?query=london');
    $('body').isPresent().then(()=> {
      browser.driver.sleep(3000);
      done();
    }, () => {
      //error skipped
      done();
    });
  });

  it('should display results list', () => {
    let el = element.all(by.css('app results pre')),
        alert = element(by.css('p.alert')),
        result = 4;

    expect(el.count()).toBe(result);
    expect(alert.isPresent()).toBeFalsy();
  });

});