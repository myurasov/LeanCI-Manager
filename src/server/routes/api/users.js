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
  throw new HttpNotImplementedException();
}

module.exports = router;
