/**
 * LeanCI Server
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

var express = require('express');

var app = express();

var server = app.listen(12345, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
