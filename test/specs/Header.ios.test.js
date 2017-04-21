const { getDriver, runApp } = appiumUtils;

describe('Header', () => {
  let driver;

  runApp();

  beforeEach(() => {
    driver = getDriver();
    driver.resetApp();
    driver.setImplicitWaitTimeout(20000);
  });

  it('should get "Albums"', () => {
    return driver
      // .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]')
      .waitForElementByAccessibilityId('Header')
      .getValue((err, value) => {
        expect(value).to.equal('Albums');
      });
  });
});
