/**
 * Serve the client with live reload
 **/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');
var plugins = require('gulp-load-plugins')();

gulp.task('serve-client', function () {
  // serve with BrowserSync
  browserSync({
    server: {
      baseDir: config.paths.client,
      index  : 'index.html'
    }
  });

  // sass
  gulp.watch(config.paths.client + '/sass/**', ['compile-styles']);

  // html
  gulp.watch([
    config.paths.client + '/index.html',
    config.paths.client + '/views/**'
  ]).on('change', browserSync.reload);
});
