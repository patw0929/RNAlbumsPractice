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
      // .source((err, code) => {
      //   console.log(code);
      // })
      // .waitForElementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.widget.TextView[1]')
      .waitForElementByAccessibilityId('Header')
      .getAttribute('text', (err, value) => {
        expect(value).to.equal('Albums');
      });
  });
});
