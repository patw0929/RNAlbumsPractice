const { getDriver, runApp } = appiumUtils;

describe('AlbumDetail', () => {
  let driver;

  runApp();

  beforeEach(async () => {
    driver = await getDriver();
    await driver.resetApp();
    await driver.setImplicitWaitTimeout(20000);
  });

  it('should get Safari window with back button after tapping the "Buy Now" button', async () => {
    const element = await driver.elementByAccessibilityId('AlbumList')
      .elementsByAccessibilityId('Button').first();

    await element.click();
    const target = await driver.elementByXPath('//*[@name="Return to RNAlbumsPractice"]');

    target.should.exist;
  });
});
