export class SearchPage {
  getHeadingText() {
    return element(by.css('h1')).getText();
  };
  getQueryInput() {
    return element(by.css('#query'));
  };
  getSubmitBtn() {
    return element(by.buttonText('Submit'));
  };
  getModelDisplay() {
    return element(by.css('.model-display'));
  };
}
