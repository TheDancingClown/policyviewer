describe('Logging In', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('navigates to the policy page on login', async () => {
    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('testuser');
    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('secret');
    await element(by.id('signInBtn')).tap();
    await expect(element(by.id('policyRef'))).toBeVisible();
    await expect(element(by.id('coverType'))).toBeVisible();
    await expect(element(by.id('car'))).toBeVisible();
    await expect(element(by.id('address'))).toBeVisible();
  });
});
