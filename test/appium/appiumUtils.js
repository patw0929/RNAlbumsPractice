import * as webDriver from './webDriver';
import * as actionServer from './actionServer';

export function runApp() {
  before(() => {
    return webDriver.createDriver()
      .then(() => actionServer.startServer());
  });
}

export const getDriver = webDriver.getDriver;
