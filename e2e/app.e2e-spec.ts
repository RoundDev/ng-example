import { NgExamplesPage } from './app.po';

describe('ng-examples App', () => {
  let page: NgExamplesPage;

  beforeEach(() => {
    page = new NgExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
