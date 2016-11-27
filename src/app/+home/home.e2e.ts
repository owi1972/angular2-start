import { browser, element, by } from 'protractor';

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

describe('Home', () => {

  let home = new HomePage();

  beforeEach(() => {
    browser.get('/');
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should have a h1', () => {
    let subject = home.getH1();
    let result  = 'Welcome to our todo list app';
    expect(subject).toEqual(result);
  });

  it('should have list length', () => {
    let subject = home.getTodosLengthText();
    let result  = '0';
    expect(subject).toEqual(result);
  });

  it('should add item to list', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddButton();
    input.sendKeys('task 1');
    submitBtn.click();
    let subject: any = home.getTodosLengthText();
    let result: any  = '1';
    expect(subject).toEqual(result);

    subject = home.getTodos();
    result = 1;
    expect(subject.count()).toEqual(result);
  });

  it('should add item to list as important', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddImportantButton();
    input.sendKeys('task 1');
    submitBtn.click();
    let subject: any = home.getTodosLengthText();
    let result: any  = '1';
    expect(subject).toEqual(result);

    subject = home.getTodos().first().getCssValue('font-size');
    result = '24px';
    expect(subject).toEqual(result);
  });

  it('should mark item as done', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddButton();
    input.sendKeys('task 1');
    submitBtn.click();
    let subject: any = home.getTodosLengthText();
    let result: any  = '1';
    expect(subject).toEqual(result);

    let done = home.getDoneInputs();
    done.click();
    subject = home.getTodos().first().element(by.css('s.title')).getText();
    result = 'task 1';
    expect(subject).toEqual(result);
  });

  it('should delete item from list', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddButton();
    input.sendKeys('task 1');
    submitBtn.click();

    let subject = home.getTodos();
    let result = 1;
    expect(subject.count()).toEqual(result);

    let deleteBtn = home.getDeleteButtons().first();
    deleteBtn.click();

    subject = home.getTodos();
    result = 0;
    expect(subject.count()).toEqual(result);
  });

});
