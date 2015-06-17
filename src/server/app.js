/**
 * LeanCI Server
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

'use strict';

var express = require('express');
var fs = require('fs');
var _ = require('lodash');

// create app
var app = express();

// read current environment
app.set('env', fs.readFileSync(__dirname + '/../../environment').toString().trim());

// configure app
require('./config')(app);
require('./config.' + app.get('env'))(app);

// listen
var server = app.listen(app.get('port'), function () {
  console.log(
    'Listening at http://%s:%s',
    server.address().address,
    server.address().port
  );
});
