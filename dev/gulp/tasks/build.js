/**
 * Build
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');
var runSequence = require('run-sequence');

// build for the dev environment
gulp.task('build:dev', function (callback) {
  runSequence(
    'cleanup',
    'set-env:dev',
    'update-rev',
    'compile-styles',
    callback
  );
});

// build for production environment
gulp.task('build:prod', function (callback) {
  runSequence(
    'cleanup',
    'set-env:prod',
    'update-rev',
    'compile-styles',
    callback
  );
});
