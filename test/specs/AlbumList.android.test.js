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

  it('should see the title "Fearless"', async () => {
    const action = new TouchAction(driver);
    const scrollDown = action.press({ y: 300 })
      .moveTo({ y: -1000 }) // drag finger up
      .release(); // release finger

    await driver.performTouchAction(scrollDown);

    const element = await driver.elementByXPath('//*[@value="Fearless"]');
    await driver.isDisplayed(element, (err, bool) => {
      expect(bool).to.equal(true);
    });
  });
});
