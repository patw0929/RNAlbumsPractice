export const IS_TRAVIS = process.env.TRAVIS;

process.env.DEVICE_TYPE = process.env.DEVICE_TYPE || 'iOS';
process.env.IOS_VERSION = process.env.IOS_VERSION || '10.3';
process.env.ANDROID_VERSION = process.env.ANDROID_VERSION || '5.0';
process.env.DEVICE_NAME = process.env.DEVICE_NAME || 'iPhone 6s';

export const DEVICE_TYPE = process.env.DEVICE_TYPE;
const IOS_APP_NAME = 'RNAlbumsPractice.app';
const IOS_CONFIGURATION = IS_TRAVIS ? 'Release' : 'Debug';
const ANDROID_CONFIGURATION = IS_TRAVIS ? 'release-unsigned' : 'debug';
const APP_PATH = process.env.DEVICE_TYPE === 'iOS' ?
  `ios/build/Build/Products/${IOS_CONFIGURATION}-iphonesimulator/${IOS_APP_NAME}` :
  `android/app/build/outputs/apk/app-${ANDROID_CONFIGURATION}.apk`;

export const WEBDRIVER_CAPS = {
  newCommandTimeout: 60,
  browserName: '',
  platformName: process.env.DEVICE_TYPE,
  platformVersion: process.env.DEVICE_TYPE === 'iOS' ? process.env.IOS_VERSION : process.env.ANDROID_VERSION,
  deviceName: process.env.DEVICE_NAME,
  app: APP_PATH,
  locale: 'en_US',
  language: 'en',
  autoAcceptAlerts: true,
  automationName: process.env.DEVICE_TYPE === 'iOS' ? 'XCUITest' : null,
};

export const APPIUM_PORT = 4723;
