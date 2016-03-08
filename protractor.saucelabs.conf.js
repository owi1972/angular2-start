'use strict';

var pkg = require('./package.json');

exports.config = {
  baseUrl: 'http://localhost:3000/',

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  specs: [
    'src/**/**.e2e.ts',
    'src/**/*.e2e.ts'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  // Saucelabs capabilities reference
  // https://docs.saucelabs.com/reference/platforms-configurator/#/
  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Chrome: Linux) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '45',
    'platform': 'Linux'
  },{
    'browserName': 'firefox',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (FF: Linux) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '41',
    'platform': 'Linux'
  },{
    'browserName': 'safari',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Safari: OS X 10.11) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '9',
    'platform': 'OS X 10.11'
  },{
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (IE11: Win 8.1) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '11',
    'platform': 'Windows 8.1'
  },{
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (IE10: Win 8) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '10',
    'platform': 'Windows 8'
  },{
    'browserName': 'Browser',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Android Browser: Android 5.1) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'platformName': 'Android',
    'platformVersion': '5.1',
    'deviceName': 'Android Emulator',
    'appiumVersion': '1.4.11',
    'deviceOrientation': 'portrait'
  },{
    'browserName': 'iphone',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Safari: iOS) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'platform': 'OS X 10.10',
    'deviceName': 'iPhone 6',
    'deviceOrientation': 'portrait'
  }],

  rootElement: 'app',

  onPrepare: function() { },

  seleniumServerJar: null,

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
   useAllAngular2AppRoots: true
};