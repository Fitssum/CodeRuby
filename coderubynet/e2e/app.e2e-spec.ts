import { CoderubynetPage } from './app.po';

describe('coderubynet App', () => {
  let page: CoderubynetPage;

  beforeEach(() => {
    page = new CoderubynetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
