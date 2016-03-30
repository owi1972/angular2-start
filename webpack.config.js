/**
 * @author: @AngularClass
 */

var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');


/**
 * Webpack configuration
 */
var commonConfig = {

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [ helpers.root('node_modules/rxjs') ] }
    ],
    loaders: [
      // Support for .ts files.
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // Less
      { test: /\.less$/, loaders: ['raw-loader', 'less-loader'], exclude: [ /node_modules/ ]},

      // Support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ helpers.root('src/index.html') ] }

    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
  
};

var clientConfig = {
  target: 'web',
  entry: './src/client',
  output: {
    path: path.join(__dirname, 'dist', 'client')
  }
};


var serverConfig = {
  target: 'node',
  entry: './src/server',
  output: {
    path: path.join(__dirname, 'dist', 'server')
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};



// Default config
var defaultConfig = {
  module: {
    noParse: [
      path.join(__dirname, 'zone.js', 'dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ]
  },
  context: __dirname,
  resolve: {
    root: path.join(__dirname, '/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}

module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
]

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}
