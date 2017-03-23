import { browser, by } from 'protractor';
import { HomePage } from './shared/home.po';

describe('Home', () => {

  let home = new HomePage();

  beforeEach(() => {
    browser.get('/');
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should have a h1', () => {
    let expected: any = 'Welcome to our todo list app';
    let result = home.getH1();
    expect(result).toEqual(expected);
  });

  it('should have list length', () => {
    let expected: any = '0';
    let result = home.getTodosLengthText();
    expect(result).toEqual(expected);
  });

  it('should add item to list', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddButton();
    input.sendKeys('task 1');
    submitBtn.click();
    let result: any = home.getTodosLengthText();
    let expected: any = '1';
    expect(result).toEqual(expected);

    result = home.getTodos();
    expected = 1;
    expect(result.count()).toEqual(expected);
  });

  it('should add item to list as important', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddImportantButton();
    input.sendKeys('task 1');
    submitBtn.click();
    let result: any = home.getTodosLengthText();
    let expected: any = '1';
    expect(result).toEqual(expected);

    result = home.getTodos().first().getCssValue('font-size');
    expected = '24px';
    expect(result).toEqual(expected);
  });

  it('should mark item as done', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddButton();
    input.sendKeys('task 1');
    submitBtn.click();
    let result: any = home.getTodosLengthText();
    let expected: any = '1';
    expect(result).toEqual(expected);

    let done = home.getDoneInputs();
    done.click();
    result = home.getTodos().first().element(by.css('s.title')).getText();
    expected = 'task 1';
    expect(result).toEqual(expected);
  });

  it('should delete item from list', () => {
    let input = home.getTitleInput();
    let submitBtn = home.getAddButton();
    input.sendKeys('task 1');
    submitBtn.click();
    input.sendKeys('task 2');
    submitBtn.click();

    let result: any = home.getTodos();
    let expected: any = 2;
    expect(result.count()).toEqual(expected);

    let deleteBtn = home.getDeleteButtons().get(1);
    deleteBtn.click();

    result = home.getTodos();
    expected = 1;
    expect(result.count()).toEqual(expected);

    result = home.getTodos().first().element(by.css('p.title')).getText().then(
      (res) => {
        return res.trim();
      });
    expected = 'task 1';
    expect(result).toEqual(expected);
  });

});
