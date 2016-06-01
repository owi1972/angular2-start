import { StartApp } from './app.po';
import { SearchPage } from './search.po';
import { ResultPage } from './result.po';

describe('Search page', () => {
  let page: SearchPage;
  let resultPage: ResultPage;
  let app: StartApp;

  beforeEach(() => {
    page = new SearchPage();
    resultPage = new ResultPage();
    app = new StartApp();
    app.navigateTo('/');
  });

  it('should display Search page title', () => {
    let el = page.getHeadingText(),
        result = 'Search';
    expect(el).toBe(result);
  });

  it('should have input "query" with value set to empty string', () => {
    let input = page.getQueryInput().getAttribute('value'),
        result = '';
    expect(input).toBe(result);
  });

  it('should update view when updating "name" input field', () => {
    let modelDisplay = page.getModelDisplay(),
        input = page.getQueryInput(),
        result = 'foobar';

    app.sendKeys(input, result);
    expect(modelDisplay.getText()).toContain(result);
  });

});
