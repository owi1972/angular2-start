'use strict'; 

describe('SearchFormComponent', () => {

  beforeEach((done) => {
    browser.get('/search');
    $('body').isPresent().then(()=> {
      done();
    }, () => {
      //error skipped
      done();
    });
  });

  it('should have input "query" with value set to empty string', () => {
    let input = element(by.css('app #query'));
    let result = '';
    expect(input.getAttribute('value')).toBe(result);
  });

  it('should update view when updating "name" input field', () => {
    let modelDisplay = element(by.css('app pre')),
        input = element(by.css('app #query')),
        result = 'foobar';

    input.clear();
    input.sendKeys(result);
    expect(modelDisplay.getText()).toContain(result);
  });

  it('should go to "results" page', () => {
    let btn = element(by.buttonText('Submit')),
        input = element(by.css('app #query')),
        result = 'Results',
        query = 'london';

    input.clear();
    input.sendKeys(query);

    btn.click().then(function() {
      return browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
          let h1 = element(by.css('app results h1'))
          expect(h1.getText()).toContain(result);
          return /results\?query=london/.test(url);
        });
      }, 10000);
    });
  });

});