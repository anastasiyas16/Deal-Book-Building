import { RmsOasPage } from './app.po';

describe('angular-material-starter-kit App', () => {
  let page: RmsOasPage;

  beforeEach(() => {
    page = new RmsOasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
