module.exports = {
  'env': {
    'es6': true,
    'mocha': true
  },
  'rules': {
    'prefer-arrow-callback': 0,
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  'plugins': [
    'chai-friendly',
  ],
  'globals': {
    'should': true,
    'expect': true,
    'appiumUtils': true,
    'testConfig': true,
  }
};
