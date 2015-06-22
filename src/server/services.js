/**
 * Services bootstrapping
 */

'use strict';

var Sequelize = require('Sequelize');

module.exports = function (app) {

  // services registry
  var services = {};

  // defince service in the services registry
  // service factory method is called only once
  function defineService(name, factoryMethod) {
    app.set(name, function () {
      if (!services[name]) {
        services[name] = factoryMethod();
      }
      return services[name];
    });
  }

  // Sequelize instance
  defineService('db', function () {
    return new Sequelize(app.get('db.connection'));
  });
};
