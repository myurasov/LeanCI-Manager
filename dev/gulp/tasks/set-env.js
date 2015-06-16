/**
 * Set environment (and write it to relevant files)
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');

function setEnvironment(env) {
  fs.writeFileSync(config.paths.root + '/env', env);
}

// set environment to 'dev'
gulp.task('set-env:dev', function () {
  setEnvironment('dev');
});

// set environment to 'prod'
gulp.task('set-env:prod', function () {
  setEnvironment('prod');
});
