/**
 * Services definition
 * Usage:
 *
 *   var defineService = require('./lib/define-service')(app, 'services');
 *   defineService('name', factoryFunction);
 *
 *   var serviceInstance = app.get('services').serviceName;
 *
 * Service factory is called only once
 */

'use strict';

/**
 * @param app {Express}
 */
module.exports = function (app, namespace) {

  // services registry
  if (!app.get(namespace)) {
    app.set(namespace, {});
  }

  return function(serviceName, factoryFunction) {

    var instances = {};
    var factories = {};

    factories[serviceName] = factoryFunction;

    // define property app.get(<namespace>).<serviceName>
    Object.defineProperty(app.get(namespace), serviceName, {
      enumerable: true,
      configurable: false,
      get: function () {
        if (!instances[serviceName]) {
          instances[serviceName] = factories[serviceName]();
        }
        return instances[serviceName];
      },
      set: function (val) {
        delete instances[serviceName];
        factories[serviceName] = val;
      }
    });
  };
};
