import { StartApp } from './app.po';

describe('Start App', function() {
  let app: StartApp;

  beforeEach(() => {
    app = new StartApp();
    app.navigateTo('/');
  });

  it('should display message containing SOON_', () => {
    let result = 'SOON_';
    expect(app.getMadeWithText()).toContain(result);
  });
});
