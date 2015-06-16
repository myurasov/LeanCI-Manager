/**
 * Serve the site with live reload
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('serve', ['build:dev'], function () {
  // serve
  browserSync({
    server: {
      baseDir: "src/client",
      index: "views/index.html"
    }
  });

  // watch
  gulp.watch(config.paths.client + '/sass/**', ['compile-styles']);
  gulp.watch([config.paths.client + '/views/**']).on('change', browserSync.reload);
});
