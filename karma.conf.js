
module.exports = function(config) {
  config.set({


    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files to exclude
    exclude: [ ],


    // list of files / patterns to load in the browser
    files: [
      // paths loaded by Karma
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'dist/**/*.js', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: false},
      {pattern: 'dist/**/*.js.map', included: false, watched: false},
      {pattern: 'node_modules/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/src/': '/base/src/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'dist/**/!(*spec).js': ['coverage']
    },


    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text', subdir: './', file: 'coverage.txt' },
        { type: 'json', subdir: './' },
        { type: 'lcovonly', subdir: './' },
        { type: 'html', subdir: './html' }
      ]
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
