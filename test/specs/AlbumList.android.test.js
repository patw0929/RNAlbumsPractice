import { TouchAction } from 'wd';

const { getDriver, runApp } = appiumUtils;

describe('AlbumList', () => {
  let driver;

  runApp();

  beforeEach(async () => {
    driver = await getDriver();
    await driver.resetApp();
    await driver.setImplicitWaitTimeout(20000);
  });

  it('should see the title "Speak Now" after scroll down', async () => {
    const action = new TouchAction(driver);
    const scrollDown = action.press({ x: 200, y: 600 })
      .wait(2000)
      .moveTo({ x: 200, y: 10 }) // drag finger up
      .release(); // release finger

    await driver.sleep(10000);
    await driver.source(); // workaround
    await driver.performTouchAction(scrollDown);
    await driver.performTouchAction(scrollDown);

    const element = await driver.elementByXPath('//*[@text="Speak Now"]')
    const displayed = await driver.isDisplayed(element);

    displayed.should.be.true;
  });
});
