/**
 * Serve the site with live reload
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');

gulp.task('serve', ['build:development', 'serve-server', 'serve-client']);
