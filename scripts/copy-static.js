var copy = require('copy'),
    glob = 'src/**/!(*.ts||*.less)',
    dest = 'dist',
    options = {
      srcBase: 'src'
    };

copy(glob, dest, options);
