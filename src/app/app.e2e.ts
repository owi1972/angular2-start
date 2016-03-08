'use strict'; 

describe('App', () => {

  beforeEach(() => {
    browser.get('/home');
  });

  it('should have input "name" with value set to "SOON_"', () => {
    let input = element(by.css('app #name'));
    let result = 'SOON_';
    expect(input.getAttribute('value')).toBe(result);
  });

  it('should update view when updating "name" input field', () => {
    let modelDisplay = element(by.css('app span.name')),
        input = element(by.css('app #name')),
        result = 'foobar';

    input.clear();
    input.sendKeys(result);
    expect(modelDisplay.getText()).toContain(result);
  });

  it('should go to "about" page', () => {
    let link = element(by.linkText('About')),
        page = element(by.css('app about')),
        result = 'About';

    link.click().then(function() {
      return browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
          expect(page.getText()).toContain(result);
          return /about/.test(url);
        });
      }, 10000);
    });
  });

});