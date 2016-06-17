import { StartApp } from './page-objects/app.po';
import { SearchPage } from './page-objects/search.po';
import { ResultPage } from './page-objects/result.po';


describe('Result page', () => {
  let page: ResultPage;
  let searchPage: SearchPage;
  let app: StartApp;

  beforeEach(() => {
    page = new ResultPage();
    searchPage = new SearchPage();
    app = new StartApp();
    app.navigateTo('/');
  });


  it('should display results list', () => {
    let btn = searchPage.getSubmitBtn(),
        input = searchPage.getQueryInput(),
        query = 'london';

    input.clear();
    app.sendKeys(input, query);

    btn.click().then(function() {
      return browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
          browser.sleep(1000);
          let items = page.getResults(),
              alert = page.getAlert(),
              moreThanValue = 0;

          expect(items.count()).toBeGreaterThan(moreThanValue);
          expect(alert.isPresent()).toBeFalsy();
          return /result\?query=london/.test(url);
        });
      }, 10000);
    });
  });

});
