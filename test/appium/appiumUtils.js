import * as webDriver from './webDriver';
import * as actionServer from './actionServer';

const EXECUTE_ACTION_ELEMENT_ID = 'Execute';
const START_PAGE_ELEMENT_ID = 'Login';

export function runApp() {
  before(() => {
    return webDriver.createDriver()
      .then(() => actionServer.startServer());
  });
}

export function callApp(opts) {
  if (opts.actions) {
    opts.actions.forEach(actionServer.action);
  }

  if (opts.redirects) {
    opts.redirects.forEach(actionServer.redirect);
  }

  return webDriver.getDriver()
    .elementByAccessibilityId(EXECUTE_ACTION_ELEMENT_ID)
    .click()
}

export function redirect(name, params) {
  return callApp({ redirects: [{ name, params }] });
}

const logout = () => callApp(actions.logout)
  .waitForElementByAccessibilityId(START_PAGE_ELEMENT_ID);

export const getDriver = webDriver.getDriver;
