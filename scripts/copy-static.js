var copy = require('copy'),
    glob = 'src/**/*.!(ts||less)',
    dest = 'dist',
    options = {
      srcBase: 'src'
    };

copy(glob, dest, options, function(err, files) {
  if (err) throw err;
  // `files` is an array of the files that were copied
});
