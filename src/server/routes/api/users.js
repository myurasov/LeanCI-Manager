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

  userModel.create({
    email: 'test@email.com',
    password: '248rujsdn'
  }).catch(function (e) {
    // return error response
    res.status(500);
    res.json({message: e.message});
  });

}

module.exports = router;
