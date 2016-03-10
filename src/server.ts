import * as path from 'path';
import * as express from 'express';

// Angular 2
import 'zone.js';
import 'reflect-metadata';
import {expressEngine, REQUEST_URL, NODE_LOCATION_PROVIDERS} from 'angular2-universal-preview';
import {provide, enableProdMode} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {App} from './app/app';
import {ENV} from './env';

let app = express();
let root = path.join(path.resolve(__dirname, '..', '..'));
let nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv === 'production') {
  enableProdMode();
}

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

// ngApp
function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl.replace(baseUrl, '') || '/';

  res.render('index', {
    directives: [App],
    providers: [
      ROUTER_PROVIDERS,
      provide(REQUEST_URL, {useValue: url}),
      provide(APP_BASE_HREF, {useValue: baseUrl}),
      NODE_LOCATION_PROVIDERS,
      provide('config', { useValue: ENV[nodeEnv] })
    ],
    preboot: true
  });
}

// Serve static files
app.use(express.static(root, {index: false}));

// Routes
app.use('/', ngApp);
app.use('/about', ngApp);
app.use('/home', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
  console.log('Environment: ' + nodeEnv);
});
