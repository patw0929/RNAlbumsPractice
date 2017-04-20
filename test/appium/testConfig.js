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

export const CREDENTIALS = {
  username: 'test@gmail.com',
  password: 'password',
  token: '32q423423423rdsdsa'
};

export const actions = {
  login: {
    actions: [{
      type: 'AUTH_LOGIN_SUCCESS',
      payload: {username: CREDENTIALS.username, token: CREDENTIALS.token}
    }],
    redirects: [{name: 'homePage'}]
  },
  logout: {
    actions: [{type: 'AUTH_LOGOUT'}],
    redirects: [{name: 'loginPage', params: {duration: 0}}]
  }
};
