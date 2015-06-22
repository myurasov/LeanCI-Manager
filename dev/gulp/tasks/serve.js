/**
 * Serve the site with live reload
 **/

'use strict';

var gulp = require('gulp');

gulp.task('serve', ['build:development', 'serve-server', 'serve-client']);
