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
    'name':  pkg.name + ' (Chrome: Windows) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '48.0',
    'platform': 'Windows 8.1'
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