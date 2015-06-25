/**
 * HTTP 401 Unauthorized exception
 */

'use strict';

var util = require('util');
var HttpException = require('./HttpException');

util.inherits(HttpUnauthorizedException, HttpException);

function HttpUnauthorizedException(message) {
  HttpException.apply(this, arguments);
  this.message = message || 'Unauthorized';
  this.code = '401';
}

module.exports = HttpUnauthorizedException;
