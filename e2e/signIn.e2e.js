describe('Logging In', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('navigates to the policy page on login', async () => {
    await element(by.id('email')).tap();
    await element(by.id('email')).typeText('test@test.com') 
    //enter email
    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('secret') 
    //enter password
    await element(by.id('loginBtn')).tap()
    //click login

    //navigates to new page
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
