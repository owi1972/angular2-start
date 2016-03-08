exports.config = {
  baseUrl: 'http://localhost:3000/',

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

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  rootElement: 'app',

  onPrepare: function() { },

  seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar",

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
   useAllAngular2AppRoots: true
};