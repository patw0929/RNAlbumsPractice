# React-Native Albums Practice project

* *Added!* Appium E2E testing Android & iOS

## Screenshots

<img src="http://i.imgur.com/736Fvcx.png" />

### E2E test - iOS

[![Alt text](https://img.youtube.com/vi/9DINxXauCTA/0.jpg)](https://www.youtube.com/watch?v=9DINxXauCTA)

### E2E test - Android

[![Alt text](https://img.youtube.com/vi/-8_e9D9UWCY/0.jpg)](https://www.youtube.com/watch?v=-8_e9D9UWCY)

## Usage

### Run Project

1. First, install packages

  ```bash
  yarn
  ```

2. Run project

  ```bash
  react-native run-ios
  ```

  or

  ```bash
  react-native run-android
  ```

### Run E2E test

1. First, install pacakges

  ```bash
  yarn
  ```

2. Run

  ```bash
  yarn run appium:ios
  ```

  or

  ```bash
  yarn run appium:android
  ```

  ps. If you encounter the `Could not get BatchedBridge` error, please run `adb reverse tcp:8081 tcp:8081`

