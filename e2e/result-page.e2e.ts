import { StartApp } from './app.po';
import { SearchPage } from './search.po';
import { ResultPage } from './result.po';


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
              result = 4;

          expect(items.count()).toBe(result);
          expect(alert.isPresent()).toBeFalsy();
          return /result\;query=london/.test(url);
        });
      }, 10000);
    });
  });

});
