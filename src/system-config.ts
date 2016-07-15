/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'angular2-universal': 'vendor/angular2-universal/dist/browser/index',
  'angular2-universal/dist/common': 'vendor/angular2-universal/dist/common',
  'angular2-universal/dist/common/tokens': 'vendor/angular2-universal/dist/common/tokens'
};

/** User packages configuration. */
const packages: any = {
  'angular2-universal/dist/common': {
    main: 'index'
  },
  'angular2-universal/dist/common/tokens': {
    main: 'index'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+search',
  'app/+result',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'client': 'client'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ defaultJSExtensions: true, map, packages });
