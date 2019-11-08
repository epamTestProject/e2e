import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';

export class SingUpPage {
  public usernameField: ElementFinder;
  public emailField: ElementFinder;
  public passwordField: ElementFinder;
  public submitButton: ElementFinder;

  public constructor() {
    this.usernameField = element(by.css('[formcontrolname=username]'));
    this.emailField = element(by.css('[formcontrolname=email'));
    this.passwordField = element(by.css('[formcontrolname=password]'));
    this.submitButton = element(by.css('[type="submit"]'));
  }

  public getPage(): Promise<any> {
    return browser.get('#/register') as Promise<any>;
  }

  public findErrorMessagesText(): ElementArrayFinder {
    return element.all(by.css('.error-messages li'));
  }
}
