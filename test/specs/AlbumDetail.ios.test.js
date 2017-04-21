const { getDriver, runApp } = appiumUtils;

describe('AlbumDetail', () => {
  let driver;

  runApp();

  beforeEach(() => {
    driver = getDriver();
    driver.resetApp();
  });

  it('should get Safari window with back button after tapping the "Buy Now" button', () => {
    return driver
      .elementByAccessibilityId('AlbumList')
      // .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]')
      // .source((err, code) => {
      //   console.log(code);
      // })
      .waitForElementsByAccessibilityId('Button').first()
      .click()
      .elementByXPath('//*[@name="Return to RNAlbumsPractice"]')
  });
});
