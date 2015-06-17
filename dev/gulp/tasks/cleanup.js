/**
 * Cleanup build files
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('cleanup', function () {
  return del.sync(config.paths.client_build);
});
