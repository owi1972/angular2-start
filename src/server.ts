// the polyfills must be the first thing imported in node.js
import 'angular2-universal-polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Angular 2 Universal
import { enableProdMode, expressEngine } from 'angular2-universal';

import { ngApp } from './main.node';
import { environment } from './app';

const app = express();
const ROOT = path.join(path.resolve(__dirname));
const livereload = require('connect-livereload');

// enable prod for faster renders
if (environment.production) {
  enableProdMode();
} else {
  app.use(livereload({
    port: 35729,
    include: [
      /\/*.css/,
      /\/*.js/,
      /\/*.html/,
      /\/*.json/
    ]
  }));
}

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(bodyParser.json());

// Serve static files
app.use('/', express.static(ROOT, {index: false}));


// Routes with html5pushstate
app.use('/', ngApp);
app.use('/result', ngApp);

// use indexFile over ngApp only when there is too much load on the server
// function indexFile(req, res) {
//   // when there is too much load on the server just send
//   // the index.html without prerendering for client-only
//   res.sendFile('/index.html', {root: __dirname});
// }


// Server
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});
