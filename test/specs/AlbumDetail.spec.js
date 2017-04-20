const { getDriver, authorize, runApp } = appiumUtils;

describe('AlbumDetail', () => {

  runApp();

  it('should get "Buy Now"', () => {
    const asserters = require('../../node_modules/wd/lib/asserters');
    const customAsserter = new asserters.Asserter((el, cb) => {
      // conduct your test here
      el.isDisplayed().then((result) => {
        if (result) { cb(); }
      })
    });

    return getDriver()
      .elementByAccessibilityId('AlbumList')
      .elementByXPath('//*[@label="Buy Now"]')
      .click()
      // .source((err, code) => {
      //   console.log(code);
      // })
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
