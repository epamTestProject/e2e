import {SingUpPage} from './pages/sign-up.page';

describe('Sign up page', () => {
  const signUp = new SingUpPage();

  it('should output error messages', async () => {
    await signUp.getPage();

    await signUp.usernameField.sendKeys('Test');
    await signUp.emailField.sendKeys('test@gmail.com');
    await signUp.passwordField.sendKeys('11111');

    await signUp.submitButton.click();

    const expectedMessages = [
      'email has already been taken',
      'password is too short (minimum is 8 characters)',
      'username has already been taken',
    ];

    const displayedMessages = await signUp.findErrorMessagesElements().getText() as unknown;

    const allMessagesIsDisplayed = (displayedMessages as string[])
      .every(displayedMessage => expectedMessages.includes(displayedMessage));

    expect(allMessagesIsDisplayed).toBeTruthy();
  });
});
