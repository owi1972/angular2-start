module.exports = function filter(path) {
  var ext = path.split('.')[path.split('.').length-1],
      include = true;
  if ( ext === 'ts' || ext === 'less' ) {
    include = false;
  } else {
    console.log("watching: "+path);
  }
  return include;
}
