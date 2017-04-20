const { getDriver, runApp } = appiumUtils;

describe('Header', () => {

  runApp();

  it('should get "Albums"', () => {
    return getDriver()
      // .source((err, code) => {
      //   console.log(code);
      // })
      .elementByXPath('//XCUIElementTypeApplication[1]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]')
      .getValue((err, value) => {
        expect(value).to.equal('Albums');
      })
      .resetApp();
  });
});
