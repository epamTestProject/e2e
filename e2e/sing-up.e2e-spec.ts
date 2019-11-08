import {SingUpPage} from './sign-up';
import {browser} from 'protractor';

describe('Sign up page', () => {
  const signUp = new SingUpPage();

  it('should output error messages', () => {
    signUp.getPage();

    signUp.usernameField.sendKeys('Test');
    signUp.emailField.sendKeys('test@gmail.com');
    signUp.passwordField.sendKeys('11111');
    signUp.submitButton.click();

    expect((signUp.findErrorMessagesText().getText()).toEqual(['email is invalid', 'password is too short (minimum  6 is 8 characters)', 'username has already been taken']) ));
  });
});
