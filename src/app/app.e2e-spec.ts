import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let result: any = browser.getTitle();
    let expected = 'Angular 2 Start';
    expect(result).toEqual(expected);
  });

  it('should have <app-home>', () => {
    let result: any = element(by.css('app-root app-home')).isPresent();
    let expected = true;
    expect(result).toEqual(expected);
  });

});
