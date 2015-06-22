/**
 * HTTP 403 Forbidden exception
 */

'use strict';

var util = require('util');
var HttpException = require('./HttpException');

util.inherits(HttpForbiddenException, HttpException);

function HttpForbiddenException(message) {
  HttpException.apply(this, arguments);
  this.message = message || 'Forbidden';
  this.code = '403';
}

module.exports = HttpForbiddenException;
