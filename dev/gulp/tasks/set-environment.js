/**
 * Set environment (and write it to relevant files)
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 **/

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');

function setEnvironment(environment) {
  fs.writeFileSync(config.paths.root + '/environment', environment);
}

// set environment to 'development'
gulp.task('set-environment:development', function () {
  setEnvironment('developments');
});

// set environment to 'production'
gulp.task('set-environment:production', function () {
  setEnvironment('production');
});
