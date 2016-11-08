var webpack = require('webpack');
var path = require('path');
var clone = require('js.clone');

const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  title: 'Angular 2 Start',
  description: 'An example angular 2 project',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer(),
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
      { test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.scss$/,
        include: [helpers.root('src')],
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [

  ]

};

// Client.
var clientPlugins = [
  /**
    * Plugin: HtmlWebpackPlugin
    * Description: Simplifies creation of HTML files to serve your webpack bundles.
    * This is especially useful for webpack bundles that include a hash in the filename
    * which changes every compilation.
    *
    * See: https://github.com/ampedandwired/html-webpack-plugin
    */
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: METADATA.title,
    chunksSortMode: 'dependency',
    metadata: METADATA,
    inject: 'head'
  }),

   /**
    * Plugin: HtmlElementsPlugin
    * Description: Generate html tags based on javascript maps.
    *
    * If a publicPath is set in the webpack output configuration, it will be automatically added to
    * href attributes, you can disable that by adding a "=href": false property.
    * You can also enable it to other attribute by settings "=attName": true.
    *
    * The configuration supplied is map between a location (key) and an element definition object (value)
    * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
    *
    * Example:
    *  Adding this plugin configuration
    *  new HtmlElementsPlugin({
    *    headTags: { ... }
    *  })
    *
    *  Means we can use it in the template like this:
    *  <%= webpackConfig.htmlElements.headTags %>
    *
    * Dependencies: HtmlWebpackPlugin
    */
  new HtmlElementsPlugin({
    headTags: require('./head-config.common')
  })
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
