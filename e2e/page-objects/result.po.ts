export class ResultPage {
  getHeading() {
    return element(by.tagName('h1'));
  };
  getAlert() {
    return element(by.css('.alert'));
  };
  getResults() {
    return element.all(by.css('.list-group-item'));
  };
}
