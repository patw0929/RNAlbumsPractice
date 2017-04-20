const { getDriver, runApp } = appiumUtils;

describe('Header', () => {

  runApp();

  it('should get "Albums"', () => {
    return getDriver()
      // .source((err, code) => {
      //   console.log(code);
      // })
      .elementByAccessibilityId('Index')
      .elementByAccessibilityId('Header')
      .elementByXPath('//*[@value="Albums"]')
      .getValue((err, value) => {
        expect(value).to.equal('Albums');
      })
      .resetApp();
  });
});
