/**
 * Update revision, write to relevant files
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

var gulp = require('gulp');
var fs = require('fs');
var config = require('../config');
var execSync = require('exec-sync');

gulp.task('update-rev', function () {

  // current revision
  var rev;

  try {
    // get rev from the git
    rev = execSync('git rev-parse HEAD').toString().trim();
  } catch (e) {
    // create rev from the current date
    rev = (new Date).toISOString().replace(/\..+$/, '').replace(/\D/g, '');
  }

  fs.writeFileSync(config.paths.root + '/rev', rev); // global
  fs.writeFileSync(config.paths.client + '/sass/_rev.scss', '$rev: "' + rev + '";'); // scss
});