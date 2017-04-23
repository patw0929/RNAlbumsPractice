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

  it('should get last item`s title 1989', async () => {
    const el1 = await driver.elementsByAccessibilityId('AlbumDetail').at(0);
    const el2 = await driver.elementsByAccessibilityId('AlbumDetail').at(1);
    const action = new TouchAction(driver);
    const scrollDown = action.press({ y: 70 }) // press near the bottom of the list
      .moveTo({ y: 300 }) // drag finger up
      .release(); // release finger

    await driver.performTouchAction(scrollDown);

    // return driver
    //   .waitForElementByAccessibilityId('AlbumDetail')
    //   .sleep(2000)
    //   .performTouchAction(scrollUp)

    // return driver
    //   .waitForElementsByAccessibilityId('AlbumDetail').last()
    //   .source((err, code) => {
    //     console.log(code);
    //   })
    //   .then((el) => {
    //     console.log(el);

    //     const scrollOpts = {
    //       element: el.value,
    //       toVisible: true,
    //     };

    //     return driver.execute("mobile: scroll", [scrollOpts]);
    //   })
    //   .sleep(10000);
      // .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]')
      // .source((err, code) => {
      //   console.log(code);
      // })
      //.waitForElementsByAccessibilityId('Button').first()
      // .click()
      // .elementByXPath('//*[@name="Return to RNAlbumsPractice"]')
  });
});
