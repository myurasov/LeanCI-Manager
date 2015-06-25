/**
 * LeanCI Server
 */

'use strict';

var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');

// create app
var app = express();

// read current environment
app.set('env', fs.readFileSync(__dirname + '/../../environment').toString().trim());
process.env.NODE_ENV = app.get('env');

// configure app
require('./config/config')(app);
require('./config/config.' + app.get('env'))(app);

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
require('./lib/authorization')(app);

// routing
app.use('/', require('./routes/index'));
app.use('/api/settings', require('./routes/api/settings'));
app.use('/api/users', require('./routes/api/users'));

// error handling
require('./lib/errors')(app);

// configure services
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
