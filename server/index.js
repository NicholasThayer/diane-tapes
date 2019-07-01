const static = require('node-static');
const rollup = require('rollup');
const rollupWatchOpts = require('./rollup-watch-opts');

const publicfiles = new (static.Server)('./public');
const watcher = rollup.watch(rollupWatchOpts);


watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error

  console.log( 'rollup watcher:', event );
});

require('http').createServer(function (request, response) {
//console.log(request);
//request.addListener('end', function () {
//  console.log( 'node static server request', request);
//	publicfiles.serve(request, response);
//});
  publicfiles.serve(request, response);


}).listen(8080);

console.log('Navigate to http://localhost:8080/.');
