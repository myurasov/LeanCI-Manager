/**
 * Error handling
 */

'use strict';

var Exception = require('../exceptions/Exception');
var HttpException = require('../exceptions/HttpException');
var HttpUnauthorizedException = require('../exceptions/HttpUnauthorizedException');

module.exports = function (app) {

  // log errors to console
  app.use(function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  });

  // handle errors and convert them to JSON response
  app.use(function (err, req, res, next) {
    if (err instanceof HttpUnauthorizedException /* HttpUnauthorizedException */) {
      res.status(err.code);
      res.append('WWW-Authenticate', 'Bearer');
      res.json({error: err.code, message: err.message});
    } else if (err instanceof HttpException /* HTTPException */) {
      res.status(err.code);
      res.json({error: err.code, message: err.message});
    } else if (err instanceof Exception /* Exception */) {
      res.status(500);
      res.json({error: err.code, message: err.message});
    } else if (err instanceof Error) /* Error object */ {
      res.status(500);
      res.json({error: err.name, message: err.message});
    } else {
      next(err);
    }
  });

};
