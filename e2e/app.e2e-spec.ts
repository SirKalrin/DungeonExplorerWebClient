import { PrivatePCReviewsPage } from './app.po';

describe('private-pcreviews App', () => {
  let page: PrivatePCReviewsPage;

  beforeEach(() => {
    page = new PrivatePCReviewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
