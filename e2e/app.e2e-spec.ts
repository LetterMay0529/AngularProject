import { MidprojetPage } from './app.po';

describe('midprojet App', function() {
  let page: MidprojetPage;

  beforeEach(() => {
    page = new MidprojetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
