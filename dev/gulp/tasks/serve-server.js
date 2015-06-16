/**
 * Serve the server with live restarts
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');
var config = require('../config');
var plugins = require('gulp-load-plugins')();

gulp.task('serve-server', function () {
  // start node http server
  plugins.nodemon({
    script: 'src/server/app.js',
    watch: [
      config.paths.server
    ]
  });
});
