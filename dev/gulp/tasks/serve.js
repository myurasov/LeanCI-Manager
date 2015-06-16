/**
 * Serve the site with live reload
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');

gulp.task('serve', ['build:dev', 'serve-server', 'serve-client']);
