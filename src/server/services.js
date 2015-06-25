/**
 * Services bootstrapping
 */

'use strict';

var Sequelize = require('Sequelize');
var defineService = require('./lib/define-service');

module.exports = function (app) {

  var service = defineService(app, 'services');
  var model = defineService(app, 'models');

  // Sequelize instance
  service('sequelize', function () {
    return new Sequelize(null, null, null, {
      dialect: 'sqlite',
      storage: app.get('sequelize.db')
    });
  });

  // models
  model('User', function () {
    return require('./models/User')(app.get('services').sequelize);
  });

  // load models
  /* jshint -W030 */
  app.get('models').User;
};
