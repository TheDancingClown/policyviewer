describe('Logging In', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('navigates to the policy page on login', async () => {
    await element(by.id('email')).tap();
    await element(by.id('email')).typeText('test@test.com');
    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('secret');
    await element(by.id('loginBtn')).tap();
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
