# Angular2 Start

An Angular 2 starter project written in [Typescript][typescript] and featuring (Router, Forms, Directives, Unit tests and E2E tests) [Karma][karma], [Protractor][protractor], [Jasmine][jasmine], [Saucelabs][saucelabs], [CircleCI][circleci], [NodeJS][nodejs], [Istanbul][istanbul], [Typescript][typescript], [@types][types], [Tslint][tslint] and [Webpack][webpack].

[![Circle CI](https://circleci.com/gh/thisissoon/angular2-start.svg?style=shield)](https://circleci.com/gh/thisissoon/angular2-start)
[![Coverage Status](https://coveralls.io/repos/github/thisissoon/angular2-start/badge.svg?branch=master)](https://coveralls.io/github/thisissoon/angular2-start?branch=master)

[![Build Status](https://saucelabs.com/open_sauce/build_matrix/angular2-start.svg)](https://saucelabs.com/beta/builds/94850a413053429f8e9a6554072b366b)

If you're looking for Angular 1.x please use [angular-start][angularstart]

This project structure is based on the [Angular 2 Webpack Starter][webpackstarter] skeleton for a typical [Angular 2][angular] Webpack application.

The project is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.


## Getting Started

__Note__: make sure you have [node][nodejs] version >= 4 installed. We recommend using [node version manager][nvm] to install nodejs and manage node versions.

### Clone the Angular Start repository

Clone the angular2-start repository using [git][git]:

```
cd path/to/parent/directory
git clone --depth 1 git@github.com:thisissoon/angular2-start.git
cd angular2-start
```


### Install Dependencies

We have two kinds of dependencies in this project: development tools and app framework code. The development tools help us build and test the application.

* We get the development tools we depend upon and our the app frameworks via `npm`, the [node package manager][npm].
* We have configured a list of tasks using [npm][npm] scripts which can be found in `package.json`.


The following tools will need to be installed globally so install them with the `-g` (global) tag:

```
npm install -g typescript
```

We have preconfigured `npm` to automatically install type definitions for typescript during install. To install all dependencies run:

```
npm install
```

You should find that you have a new folder in your project.

* `node_modules` - contains the npm packages for the dev tools we need as well as our app framework libraries

### Installing Libraries

To install a new library such as bootstrap we can run:

```
npm install bootstrap --save
```

And this will download the bootstrap package using npm and also update `package.json` to include that package.


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```
npm start
```

Now browse to the app at [http://localhost:3000](http://localhost:3000).

To watch files and have changes to the application updated in the browser without having to have the browser reload the whole page you can use the Hot Module Reloading (HMR) feature by running:

```
npm run start:hmr
```

This command will watch all source files and run relevent task when particular files are updated e.g. compiling typescript whenever a typescript file is updated.


### Running the build script

To create a build to deploy for a dev environment simply run:

```
npm run build
```

To build a version for production run:

```
npm run build:prod
```

The build files will then be in the `dist` directory.



## Directory Layout

```
config/                             --> various config files for dev tools
  karma.conf.js                     --> config file for running unit tests with karma
  protractor.conf.js                --> config file for running e2e tests with Protractor
  webpack.common.js                 --> shared webpack config
  webpack.[env].js                  --> webpack config for each environment
dist/                               --> built application files
src/                                --> application source files
  app/                              --> typescript files
    {module}/                       --> angular module ts files
      {module}.component.ts         --> web component
      {module}.spec.ts              --> unit test for component
      {module}.template.ts          --> unit test for component
  assets/                           --> static build files to be served to client
  scss/                             --> global styles in SCSS syntax
  index.html                        --> main index html file
  client.ts                         --> bootstrap for client
  main.browser.ts                   --> client app to be loaded by client in browser
  polyfills.browser.ts              --> require all polyfills for future browser features
  vendor.browser.ts                 --> require all vendor files here such as angular
examples/                           --> folder for prototyping html and styles
package.json                        --> npm config
tsconfig.json                       --> config for typescript compiler
tslint.json                         --> config for tslint
typedoc.json                        --> config for generating documentation


```

## Testing

### Running Unit Tests

The angular2-start app comes preconfigured with unit tests. These are written in [Jasmine][jasmine], which we run with [Karma][karma].

* the configuration is found in `config/karma.conf.js`
* the unit tests are found in the same directory as the modules they test and are suffixed with `.spec.ts`.

The easiest way to run the unit tests is:

```
npm test
```


### End to end testing

The angular2-start app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has special features for Angular applications.

* the configuration is found at `config/protractor.conf.js`
* the end-to-end tests are found in the same directory as the same directory as the files they test and are suffixed with `.e2e.ts`.

Protractor simulates interaction with our web app and verifies that the application responds correctly. Therefore, our web server needs to be serving up the application, so that Protractor can interact with it. To run end to end tests we first need to install protractor with global permissions.

```
npm install -g protractor
```

Then simply run:

```
npm run e2e
```

Behind the scenes this will also run `webdriver-manager update` and `webdriver-manager start`. This will download and install the latest version of the stand-alone WebDriver tool and start the Selenium web server. This script will execute the end-to-end tests against the application being hosted on the development server.



## Contact

For more information on Angular please check out [https://angular.io/][angular]

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://angular.github.io/protractor/#/
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: https://karma-runner.github.io/
[typescript]: http://www.typescriptlang.org/
[circleci]: https://circleci.com/
[nodejs]: https://nodejs.org/en/
[istanbul]: https://github.com/gotwarlost/istanbul
[tslint]: https://palantir.github.io/tslint/
[webpack]: https://webpack.github.io/
[webpackstarter]: https://github.com/AngularClass/angular2-webpack-starter
[angular]: https://angular.io/
[nvm]: https://github.com/creationix/nvm
[saucelabs]: http://saucelabs.com/
[angularstart]: https://github.com/thisissoon/angular-start
[types]: https://www.npmjs.com/~types
