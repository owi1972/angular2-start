# Angular2 Start

An Angular 2 starter project written in [Typescript][typescript] and featuring (Router, Forms, Directives, Unit
tests and E2E tests) [Karma][karma], [Protractor][protractor], [Jasmine][jasmine], [Saucelabs][saucelabs], 
[CircleCI][circleci], [NodeJS][nodejs], [Istanbul][istanbul], [Typescript][typescript], [Typings][typings], 
[Tslint][tslint], [Webpack][webpack].

[![Circle CI](https://circleci.com/gh/thisissoon/angular2-start.svg?style=shield)](https://circleci.com/gh/thisissoon/angular2-start)
[![Build Status](https://travis-ci.org/thisissoon/angular2-start.svg?branch=master)](https://travis-ci.org/thisissoon/angular2-start)
[![Coverage Status](https://coveralls.io/repos/github/thisissoon/angular2-start/badge.svg?branch=master)](https://coveralls.io/github/thisissoon/angular2-start?branch=master)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/angular2-start.svg)](https://saucelabs.com/u/angular2-start)

If you're looking for Angular 1.x please use [angular-start][angularstart]  

This project structure is based on the [Angular Universal Starter][universalstarter] and 
[Angular Werbpack Start][webpackstarter] skeleton for a typical [Angular 2][angular] universal/webpack 
application.

The project is preconfigured to install the Angular framework and a bunch of development and testing tools for 
instant web development gratification.


## Getting Started

__Note__: make sure you have [node][nodejs] version >= 4 installed. We recommend using [node version manager][nvm] 
to install nodejs and manage node versions.

### Clone the Angular Start repository

Clone the angular-start repository using [git][git]:

```
cd path/to/parent/directory
git clone --depth 1 git@github.com:thisissoon/angular2-start.git
cd angular2-start
```


### Install Dependencies

We have two kinds of dependencies in this project: development tools and app framework code. The development
 tools help us build and test the application.

* We get the development tools we depend upon and our the app frameworks via `npm`, the [node package manager][npm].
* We have configured a list of tasks using [npm][npm] scripts which can be found in `package.json`.


The following tools will need to be installed globally so install them with the `-g` (global) tag:

```
npm install -g typescript protractor
```

We have preconfigured `npm` to automatically install typings for typescript after install so to install our
 dependencies simply run:

```
npm install
```

Behind the scenes this will also call `typings install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the dev tools we need as well as our app framework libraries
* `typings` - contains typings for typescript

### Installing Libraries

To install a new library such as bootstrap we can simply do:

```
npm install --save bootstrap
```

And this will download the bootstrap package using npm and also update `package.json` to include that package.


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```
npm start
```

Now browse to the app at [http://localhost:3000](http://localhost:3000).

To rebuild the app after making changes you can run

```
npm run watch
``` 

This command will watch all source files and run tests every time a typescript file is updated and compile less 
when a less file is updated.

### Running the build script

To create a build to deploy for a production environment simply run: 

```
npm run build
```

The build files will then be in the `dist/` directory.



## Directory Layout

```
dist/                         --> bundled application files
src/                          --> all of the files to be used in development
  assets/                     --> static assets folder such as images
    img/                      --> image files
  index.html                  --> app layout file (the main html template file of the app)
  app/                        --> typescript files
    {module}/                 --> angular module ts files
      {module}.ts             --> angular module code
      {module}.spec.ts        --> unit test for module
      {module}.e2e.ts         --> e2e test for module
      {module}.html           --> html code for module
      {module}.less           --> less code for module
  client.ts                   --> client app to be loaded by client in browser
  env.ts                      --> contains environment variables
  server.ts                   --> server app which runs in node and starts an express app
karma.conf.js                 --> config file for running unit tests with karma
protractor.conf.js            --> config file for running e2e tests with Protractor
protractor.saucelabs.conf.js  --> config file for running e2e tests with Protractor via saucelabs
spec-bundle.js                --> bundles files for unit tests
tsconfig.json                 --> config file for typescript compiler 
tslint.json                   --> config file for tslint 
typings.json                  --> typings manager file
webpack.config.js             --> config file for webpack
webpack.test.js               --> test config file for webpack


```

## Testing

There are two kinds of tests in the angular2-start application: Unit tests and End to End tests.

### Running Unit Tests

The angular2-start app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with [Karma][karma].

* the configuration is found in `karma.conf.js`
* the unit tests are found in the same directory as the modules they test and are suffixed with `.spec.ts`.

The easiest way to run the unit tests is to do:

```
npm test
```


### End to end testing

The angular2-start app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `protractor.conf.js`
* the end-to-end tests are found in the same directory as the modules they test and are suffixed with `.e2e.ts`.

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it. To run end to end tests we first need to install protractor with global 
permissions.

```
npm install -g protractor
```

Then simply run:

```
npm run e2e
```

Behind the scenes this will also run `webdriver-manager update` and `webdriver-manager start`. This will download 
and install the latest version of the stand-alone WebDriver tool and start the Selenium web server. This script 
will execute the end-to-end tests against the application being hosted on the development server.


## Contact

For more information on Angular please check out [https://angular.io/][angular]

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://angular.github.io/protractor/#/
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: https://karma-runner.github.io/
[typescript]: http://www.typescriptlang.org/
[saucelabs]: http://saucelabs.com/
[circleci]: https://circleci.com/
[nodejs]: https://nodejs.org/en/
[istanbul]: https://github.com/gotwarlost/istanbul
[typings]: https://www.npmjs.com/package/typings
[tslint]: https://palantir.github.io/tslint/
[webpack]:https://webpack.github.io/
[angularstart]: https://github.com/thisissoon/angular-start
[universalstarter]: https://github.com/angular/universal-starter
[webpackstarter]: https://angularclass.github.io/angular2-webpack-starter
[angular]: https://angular.io/
[nvm]: https://github.com/creationix/nvm
