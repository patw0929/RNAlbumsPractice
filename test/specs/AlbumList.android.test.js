import { TouchAction } from 'wd';

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
    const scrollUp = new TouchAction(driver)
      .press({ x: 100, y: 50 }) // press near the bottom of the list
      .moveTo({ x: 100, y: 500 }) // drag finger up
      .release(); // release finger

    return driver
      .waitForElementByAccessibilityId('AlbumDetail')
      .performTouchAction(scrollUp)
      // .source((err, code) => {
      //   console.log(code);
      // })
      // .then((el) => {
      //   console.log(el);

      //   const scrollOpts = {
      //     element: el.value,
      //     toVisible: true,
      //   };

      //   const action = new TouchAction(driver);

      //   return action.scroll(scrollOpts);
      // })
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
