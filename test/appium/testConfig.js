export const IS_TRAVIS = process.env.TRAVIS;
process.env.IOS_VERSION = process.env.IOS_VERSION || '10.3';
process.env.DEVICE_NAME = process.env.DEVICE_NAME || 'iPhone 6s';

const APP_NAME = 'RNAlbumsPractice.app';
const CONFIGURATION = IS_TRAVIS ? 'Release' : 'Debug';

export const WEBDRIVER_CAPS = {
  newCommandTimeout: 60,
  browserName: '',
  platformName: 'iOS',
  platformVersion: process.env.IOS_VERSION,
  deviceName: process.env.DEVICE_NAME,
  app: `ios/build/Build/Products/${CONFIGURATION}-iphonesimulator/${APP_NAME}`,
  locale: 'en_US',
  language: 'en',
  autoAcceptAlerts: true,
  automationName: 'XCUITest',
};

export const APPIUM_PORT = 4723;
