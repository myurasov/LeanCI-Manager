/**
 * /api/settings route
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', getCollection);
router.put('/:id', updtateOrCreateItem);

/**
 * GET /
 */
function getCollection(req, res) {
  res.json(req.app.get('local_settings'));
}

/**
 * PUT /:id
 */
function updtateOrCreateItem(req, res) {
  var settings = req.app.get('local_settings');
  var id = req.params.id;

  // update settings
  settings[id] = req.body;

  // save settings
  fs.writeFileSync(req.app.get('paths.root') + '/settings.json', JSON.stringify(settings));
  req.app.set('local_settings', settings);

  // return current settings
  res.json(settings);
}

module.exports = router;
