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

  // create user

  User.create(input)

    .then(function (e) {
      var data = e.dataValues;
      delete data.passwordHash;
      res.json(data);
    })

    .catch(function (e) {
      // return error response
      res.status(500);
      res.json({message: e.message});
    });

}

module.exports = router;
