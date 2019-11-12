import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';

export class SingUpPage {
  public usernameField: ElementFinder;
  public emailField: ElementFinder;
  public passwordField: ElementFinder;
  public submitButton: ElementFinder;

  public constructor() {
    this.usernameField = $('[formcontrolname=username]');
    this.emailField = $('[formcontrolname=email]');
    this.passwordField = $('[formcontrolname=password]');
    this.submitButton = $('[type="submit"]');
  }

  public getPage(): Promise<any> {
    return browser.get('/register') as Promise<any>;
  }

  public findErrorMessagesElements(): ElementArrayFinder {
    return $$('.error-messages li');
  }
}
