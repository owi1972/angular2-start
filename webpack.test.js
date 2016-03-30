var helpers = require('./helpers');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  // Options affecting the resolving of modules.
  //
  // See: http://webpack.github.io/docs/configuration.html#resolve
  resolve: {

    // An array of extensions that should be used to resolve modules.
    //
    // See: http://webpack.github.io/docs/configuration.html#resolve-extensions
    extensions: ['', '.ts', '.js'],
    
    // Make sure root is src
    root: helpers.root('src'),

  },

  // Options affecting the normal modules.
  //
  // See: http://webpack.github.io/docs/configuration.html#module
  module: {

    // An array of applied pre and post loaders.
    //
    // See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [ helpers.root('node_modules/rxjs') ] }
    ],
    loaders: [
      // Support for .ts files.
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(e2e)\.ts$/ ] },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // Less
      { test: /\.less$/, loaders: ['raw-loader', 'less-loader'], exclude: [ /node_modules/ ]},

      // Support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ helpers.root('src/index.html') ] }

    ],

    // An array of applied pre and post loaders.
    
    // See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
    postLoaders: [

      // Instruments JS files with Istanbul for subsequent code coverage reporting.
      // Instrument only testing sources.
      //
      // See: https://github.com/deepsweet/istanbul-instrumenter-loader
      {
        test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }

    ]
  },
  

  // Include polyfills or mocks for various node stuff
  // Description: Node configuration
  //
  // See: https://webpack.github.io/docs/configuration.html#node
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }

};
