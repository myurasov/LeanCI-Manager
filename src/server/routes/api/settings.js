/**
 * /api/settings route
 */

'use strict';

var express = require('express');
var fs = require('fs');

var router = express.Router();
router.get('/', getCollection);
router.put('/:id', updtateOrCreateItem);

/**
 * GET /
 */
function getCollection(req, res) {
  res.json(req.app.get('settings'));
}

/**
 * PUT /:id
 */
function updtateOrCreateItem(req, res) {
  var settings = req.app.get('settings');
  var id = req.params.id;

  // update settings
  settings[id] = req.body;

  // save settings
  fs.writeFileSync(req.app.get('paths.root') + '/data/settings.json', JSON.stringify(settings));
  req.app.set('settings', settings);

  // return current settings
  res.json(settings);
}

module.exports = router;
