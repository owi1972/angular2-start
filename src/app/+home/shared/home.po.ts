import { element, by } from 'protractor';

export class HomePage {
  getH1() {
    return element(by.css('h1')).getText();
  };

  getTodosLengthText() {
    return element(by.css('.text-todos-length')).getText();
  }

  getTodos() {
    return element.all(by.css('todo'));
  }

  getTitleInput() {
    return element(by.css('.form-control-title'));
  }

  getAddButton() {
    return element(by.css('.btn-add'));
  }

  getAddImportantButton() {
    return element(by.css('.btn-add-important'));
  }

  getDoneInputs() {
    return element.all(by.css('.input-done'));
  }

  getDeleteButtons() {
    return element.all(by.css('.btn-delete'));
  }
}
