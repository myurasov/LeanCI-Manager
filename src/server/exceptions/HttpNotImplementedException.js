/**
 * HTTP 501 Not Implemented exception
 */

'use strict';

var util = require('util');
var HttpException = require('./HttpException');

util.inherits(HttpNotImplementedException, HttpException);

function HttpNotImplementedException(message) {
  HttpException.apply(this, arguments);
  this.message = message || 'Not Implemented';
  this.code = '501';
}

module.exports = HttpNotImplementedException;
