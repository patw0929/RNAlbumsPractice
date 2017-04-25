const { getDriver, runApp } = appiumUtils;

describe('Header', () => {
  let driver;

  runApp();

  beforeEach(async () => {
    driver = await getDriver();
    await driver.resetApp();
    await driver.setImplicitWaitTimeout(20000);
  });

  it('should get "Albums"', async () => {
    const header = await driver.elementByAccessibilityId('Header');
    const text = await header.elementByXPath('//android.widget.TextView[1]');

    expect(await text.text()).to.equal('Albums');
  });
});
