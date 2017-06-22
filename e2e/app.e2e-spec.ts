import { ZpiPage } from './app.po';

describe('zpi App', () => {
  let page: ZpiPage;

  beforeEach(() => {
    page = new ZpiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
