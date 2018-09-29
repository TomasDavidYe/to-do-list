import { AppPage } from './app.po';
import { element, by } from '../../node_modules/protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Test Project!');
  });

  it('should click button to find dummu component', () => {
    page.navigateTo();
    let button = page.getRedirectToDummyButton();
    button.click()
    expect(element(by.css('[class = "dummy"]')).getText()).toBe('dummy works!');
    
  });

});
