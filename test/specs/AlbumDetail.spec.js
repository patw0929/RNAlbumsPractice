const { getDriver, runApp } = appiumUtils;

describe('AlbumDetail', () => {
  let driver;

  runApp();

  beforeEach(() => {
    driver = getDriver();
    driver.resetApp();
  });

  it('should get Safari window with back button after click the "Buy Now" button', () => {
    return driver
      .elementByAccessibilityId('AlbumList')
      .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]')
      .click()
      // .source((err, code) => {
      //   console.log(code);
      // })
      .elementByXPath('//*[@name="Return to RNAlbumsPractice"]')
  });

  // it('should update counter', () => {
  //  return getDriver()
  //    .waitForElementByAccessibilityId('Dashboard')

  //    .elementByAccessibilityId('CounterPlus')
  //    .click()
  //    .elementByAccessibilityId('CounterPlus')
  //    .click()
  //    .elementByAccessibilityId('CounterMinus')
  //    .click()

  //    .elementByAccessibilityId('CounterValue')
  //    .getValue()
  //    .then(amount => expect(amount).to.equal('1'))
  // });
});
