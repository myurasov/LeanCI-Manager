/**
 * /api/users route
 */

'use strict';

var express = require('express');

var router = express.Router();
router.post('/', createItem);

/**
 * POST /
 */
function createItem(req, res) {
  var app = req.app;
  var User = app.get('models').User;
  var input = req.body;

  // check access
  User.count().then(function (count) {

    if (count !== 0) {
      // return error response
      res.status(403 /* forbidden */);
      res.json({message: 'Primary user already exists'});
    }

    // create user
    input.isAdmin = true;
    var user = User.build(input);

    // save user
    user.save()

      .then(function (e) {
        var data = e.dataValues;
        // remove password hash from response
        delete data.passwordHash;
        res.json(data);
      })

      .catch(function (e) {
        // return error response
        res.status(500);
        res.json({message: e.message});
      });
  });

}

module.exports = router;
