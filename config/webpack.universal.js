var webpack = require('webpack');
var path = require('path');
var clone = require('js.clone');
var webpackMerge = require('webpack-merge');
const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: HMR
};

var commonPlugins = [
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
    helpers.root('src'),
    {
      // your Angular Async Route paths relative to this root directory
    }
  ),

  /**
   * Plugin: DefinePlugin
   * Description: Define free variables.
   * Useful for having development builds with debug logging or adding global constants.
   *
   * Environment helpers
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
   */
  // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
  new DefinePlugin({
    'ENV': JSON.stringify(METADATA.ENV),
    'HMR': METADATA.HMR,
    'process.env': {
      'ENV': JSON.stringify(METADATA.ENV),
      'NODE_ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
    }
  }),

  // To use gzip, you can run 'npm install compression-webpack-plugin --save-dev'
  // add 'var CompressionPlugin = require("compression-webpack-plugin");' on the top
  // and comment out below codes
  //
  // new CompressionPlugin({
  //   asset: "[path].gz[query]",
  //   algorithm: "gzip",
  //   test: /\.js$|\.css$|\.html$/,
  //   threshold: 10240,
  //   minRatio: 0.8
  // })
];

var commonConfig = {
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  context: helpers.root(),
  output: {
    publicPath: helpers.root(),
    filename: 'index.js'
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      // {
      //   test: /\.scss$/,
      //   loader: 'style!css!sass',
      //   include: [helpers.root('src/scss')],
      // },
      // {
      //   test: /\.scss$/,
      //   loader: 'to-string!css!sass',
      //   include: [helpers.root('src/app')],
      // },
    ],
  },
  plugins: [
    // Use commonPlugins.
  ]

};

// Client.
var clientPlugins = [

];

var clientConfig = {
  target: 'web',
  entry: helpers.root('src/client'),
  output: {
    path: helpers.root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


// Server.
var serverPlugins = [

];

var serverConfig = {
  target: 'node',
  entry: helpers.root('src/server'), // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: helpers.root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  externals: includeClientPackages([
    // include these client packages so we can transform their source with webpack loaders

    // '@angular/platform-browser',
    // '@angular/platform-browser-dynamic',
    // '@angular/core',
    // '@angular/common',
    // '@angular/forms',
    // '@angular/http',
    // '@angular/router',

    // // AngularClass
    // '@angularclass/hmr',

    // // RxJS
    // 'rxjs/add/operator/map',
    // 'rxjs/add/operator/mergeMap',
  ]),
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};

module.exports = [
  // Client
  webpackMerge(clone(commonConfig), clientConfig, { plugins: clientPlugins.concat(commonPlugins) }),

  // Server
  webpackMerge(clone(commonConfig), serverConfig, { plugins: serverPlugins.concat(commonPlugins) })
];

function includeClientPackages(packages) {
  return function(context, request, cb) {
    if (packages && packages.indexOf(request) !== -1) {
      return cb();
    }
    return checkNodeImport(context, request, cb);
  };
}
// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}
