/**
 * LeanCI Server
 */

'use strict';

var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var Exception = require('./exceptions/Exception');
var HttpException = require('./exceptions/HttpException');
var HttpUnauthorizedException = require('./exceptions/HttpUnauthorizedException');
var cookieParser = require('cookie-parser');

// create app
var app = express();

// read current environment
app.set('env', fs.readFileSync(__dirname + '/../../environment').toString().trim());

// configure app
require('./config')(app);
require('./config.' + app.get('env'))(app);

// read local settings (unique for the current installation)
if (fs.existsSync(app.get('paths.root') + '/data/settings.json')) {
  app.set('settings', require(app.get('paths.root') + '/data/settings.json'));
} else {
  app.set('settings', {});
}

// middleware setup
app.use(morgan('dev')); // logging
app.use(cors()); // cross origin resource sharing
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// authorization
require('./authorization')(app);

// routing
app.use('/', require('./routes/index'));
app.use('/api/settings', require('./routes/api/settings'));
app.use('/api/users', require('./routes/api/users'));

// log errors to console
app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

// handle errors and convert them to JSON response
app.use(function (err, req, res, next) {
  if (err instanceof HttpUnauthorizedException /* HttpUnauthorizedException */) {
    res.status(err.code);
    res.append('WWW-Authenticate', 'Bearer');
    res.json({error: err.code, message: err.message});
  } else if (err instanceof HttpException /* HTTPException */) {
    res.status(err.code);
    res.json({error: err.code, message: err.message});
  } else if (err instanceof Exception /* Exception */) {
    res.status(500);
    res.json({error: err.code, message: err.message});
  } else if (err instanceof Error) /* Error object */ {
    res.status(500);
    res.json({error: err.name, message: err.message});
  } else {
    next(err);
  }
});

// include services
require('./services')(app);

// initialize database
app.get('services').sequelize.sync();

// listen
var server = app.listen(app.get('port'), function () {
  console.log(
    'Listening at http://%s:%s',
    server.address().address,
    server.address().port
  );
});
