const { getDriver, runApp } = appiumUtils;

describe('AlbumList', () => {
  let driver;

  runApp();

  beforeEach(() => {
    driver = getDriver();
    driver.resetApp();
    driver.setImplicitWaitTimeout(20000);
  });

  it('should get last item`s title 1989', () => {

    return driver
      .waitForElementsByAccessibilityId('AlbumDetail').last()
      .source((err, code) => {
        console.log(code);
      })
      .then((el) => {
        console.log(el);

        const scrollOpts = {
          element: el.value,
          toVisible: true,
        };

        return driver.execute("mobile: scroll", [scrollOpts]);
      })
      .sleep(10000);
      // .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]')
      // .source((err, code) => {
      //   console.log(code);
      // })
      //.waitForElementsByAccessibilityId('Button').first()
      // .click()
      // .elementByXPath('//*[@name="Return to RNAlbumsPractice"]')
  });
});
