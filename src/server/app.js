/**
 * LeanCI Server
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

'use strict';

var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// create app
var app = express();

// read current environment
app.set('env', fs.readFileSync(__dirname + '/../../environment').toString().trim());

// configure app
require('./config')(app);
require('./config.' + app.get('env'))(app);

// read local settings (unique for the current installation)
if (fs.existsSync(app.get('paths.root') + '/settings.json')) {
  app.set('local_settings', require(app.get('paths.root') + '/settings.json'));
} else {
  app.set('local_settings', {});
}

// middleware setup
app.use(morgan('dev')); // logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routing
app.use('/', require('./routes/index'));

// listen
var server = app.listen(app.get('port'), function () {
  console.log(
    'Listening at http://%s:%s',
    server.address().address,
    server.address().port
  );
});
