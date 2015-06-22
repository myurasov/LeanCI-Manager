/**
 * Generic exception
 */

'use strict';

function Exception(message, code) {
  this.message = message;
  this.code = code;
}

module.exports = Exception;
