/**
 * Authorization middleware
 */

'use strict';

var jwt = require('jsonwebtoken');
var HttpUnauthorizedException = require('./exceptions/HttpUnauthorizedException');

module.exports = function (app) {

  // signing secret, unique per isntallation
  var secret = app.get('settings').secret;

  var authorizationMiddleware = function (req, res, next) {

    // read token from: headers, body, query, cookie
    var token = req.get('authorization') ||
                req.body.authorization ||
                req.query.authorization ||
                req.cookies.authorization;

    if (token) {
      // token may be in "Bearer <token>" format
      if (token.split(' ')[0] === 'Bearer') {
        token = token.split(' ')[1];
      }

      // decode token
      try {
        var decoded = jwt.verify(token, secret);

        // todo: add user to params

      } catch (err) {
        throw new HttpUnauthorizedException(err.toString());
      }
    } else {
      throw new HttpUnauthorizedException('Missing token');
    }
  };

  app.use(authorizationMiddleware);
};
