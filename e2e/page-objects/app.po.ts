export class StartApp {
  navigateTo(path) {
    return browser.get(path);
  };
  getMadeWithText() {
    return element(by.css('p.made-with')).getText();
  };
  sendKeys(el, word) {
    let keys = word.split('');
    for (var i = 0; i < keys.length; i++) {
      el.sendKeys(keys[i]);
      browser.sleep(500);
    }
  };
}
