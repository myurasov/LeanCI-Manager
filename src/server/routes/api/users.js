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
  var userModel = req.app.get('models.user')();
  var input = req.body;

  // create user

  userModel.create(input)

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
