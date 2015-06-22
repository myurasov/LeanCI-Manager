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

  var u =  userModel.create({
    email: 'test@email.com',
    password: '248rujsdn'
  });

  res.json({});
}

module.exports = router;
