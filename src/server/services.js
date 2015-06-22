/**
 * Services bootstrapping
 */

'use strict';

var Sequelize = require('Sequelize');
var utils = require('./utils');

module.exports = function (app) {

  // Sequelize instance
  utils.defineService(app, 'services.sequelize', function () {
    return new Sequelize(null, null, null, {
      dialect: 'sqlite',
      storage: app.get('sqlite_db')
    });
  });

  // models

  utils.defineService(app, 'models.user', function () {
    return require('./models/User')(app.get('services.sequelize')());
  });

};
