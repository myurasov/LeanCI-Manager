/**
 * HTTP exception
 */

'use strict';

var util = require('util');
var Exception = require('./Exception');

util.inherits(HttpException, Exception);

function HttpException(message, httpCode) {
  Exception.apply(this, arguments);
  this.code = (httpCode || 500).toString();
}

module.exports = HttpException;
