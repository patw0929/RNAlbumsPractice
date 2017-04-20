const { getDriver, runApp } = appiumUtils;

describe('AlbumDetail', () => {

  runApp();

  it('should get "Buy Now"', () => {
    return getDriver()
      .elementByAccessibilityId('AlbumList')
      .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]')
      .click()
      // .source((err, code) => {
      //   console.log(code);
      // })
      // .sleep(500)
      // .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[2]/XCUIElementTypeStatusBar[1]')
      .resetApp();
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
