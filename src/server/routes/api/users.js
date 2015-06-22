/**
 * /api/users route
 */

'use strict';

var express = require('express');
var HttpNotImplementedException = require('../../exceptions/HttpNotImplementedException');

var router = express.Router();
router.post('/', createItem);

/**
 * PUT /:id
 */
function createItem(req, res) {

  var userModel = req.app.get('models.user')();

  userModel.sync({force: true}).then(function () {
    return userModel.create({
      email: 'test@email.com'
    });
  });

  res.json({});
}

module.exports = router;
