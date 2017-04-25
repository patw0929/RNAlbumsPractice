const { getDriver, runApp } = appiumUtils;

describe('AlbumDetail', () => {
  let driver;

  runApp();

  beforeEach(async () => {
    driver = await getDriver();
    await driver.resetApp();
    await driver.setImplicitWaitTimeout(20000);
  });

  it('should get Browser window with back button after clicking the "Buy Now" button', async () => {
    const buyButton = await driver.elementsByAccessibilityId('Button').first();

    await buyButton.click();

    const buttonOnce = await driver.elementById('android:id/button_once');

    await buttonOnce.click();

    const target = await driver.elementByAccessibilityId('Taylor Swift');

    expect(target).to.exist;
  });
});
