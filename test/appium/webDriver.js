import wd from 'wd';
import { spawn } from 'child_process';
import net from 'net';
import fs from 'fs';
import path from 'path';
import { DEVICE_TYPE, APPIUM_PORT, WEBDRIVER_CAPS, IS_TRAVIS } from './testConfig';

const APP_DIR = path.resolve('.');

let driver;

function buildApp() {
  console.log('building native application');

  try {
    const isExists = fs.existsSync(`${APP_DIR}/${WEBDRIVER_CAPS.app}`);

    if (isExists) {
      console.log('build exist, skipping build');

      return Promise.resolve();
    }
  } catch (e) {
    console.log(e);
  }

  if (DEVICE_TYPE === 'iOS') {
    return new Promise((resolve) => {
      const build = spawn(`${APP_DIR}/scripts/build-tests-ios.sh`);

      build.on('close', resolve);
      build.stdout.pipe(process.stdout);
      build.stderr.pipe(process.stderr);
    });
  } else if (DEVICE_TYPE === 'Android') {
    return new Promise((resolve) => {
      const build = spawn(`${APP_DIR}/scripts/build-tests-android.sh`);

      build.on('close', resolve);
      build.stdout.pipe(process.stdout);
      build.stderr.pipe(process.stderr);
    });
  }

  throw new Error('Wrong DEVICE_TYPE');
}

function logsHandler(d) {
  d.on('status', (info) => {
    console.log(info);
  });

  d.on('command', (meth, currentPath, data) => {
    console.log(` > ${meth}`, currentPath, data || '');
  });

  d.on('http', (meth, currentPath, data) => {
    console.log(` > ${meth}`, currentPath, data || '');
  });
}

function checkPort(port) {
  return new Promise((resolve, reject) => {
    const client = net.connect(port, resolve);

    client.on('error', () => {
      client.destroy();
      reject();
    });
  });
}

function startAppium() {
  return checkPort(APPIUM_PORT).catch(() => new Promise((resolve) => {
    const p = spawn('appium');

    process.on('exit', () => {
      p.kill('SIGHUP');
    });

    p.stderr.pipe(process.stderr);

    if (IS_TRAVIS) {
      // p.stdout.pipe(process.stdout);
    }

    resolve();
  }));
}

function waitPort(port) {
  return checkPort(port).catch(() => new Promise((resolve, reject) => {
    setTimeout(() => waitPort(port).then(resolve, reject));
  }));
}

function createWebDriver() {
  const serverConfig = {
    host: 'localhost',
    port: 4723,
  };

  driver = wd.promiseChainRemote(serverConfig);
  logsHandler(driver);

  return driver.init(WEBDRIVER_CAPS);
}

export function getDriver() {
  return driver;
}

export function createDriver() {
  if (driver) {
    return Promise.resolve(driver);
  }

  return buildApp()
    .then(() => startAppium())
    .then(() => waitPort(APPIUM_PORT))
    .then(createWebDriver);
}

export function stop() {
  return driver && driver.quit()
    .catch(() => {});
}
