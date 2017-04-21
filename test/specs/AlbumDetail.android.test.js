const { getDriver, runApp } = appiumUtils;

describe('AlbumDetail', () => {
  let driver;

  runApp();

  beforeEach(() => {
    driver = getDriver();
    driver.resetApp();
    driver.setImplicitWaitTimeout(20000);
  });

  it('should get Browser window with back button after clicking the "Buy Now" button', () => {
    return driver
      .waitForElementByAccessibilityId('AlbumList')
      .waitForElementsByAccessibilityId('Button').first()
      .click()
      .elementByIdIfExists('android:id/button_once', (err, element) => {
        element.click();
      })
      .source((err, code) => {
        console.log(code);
      })
      .waitForElementByAccessibilityId('Taylor Swift');
  });
});
