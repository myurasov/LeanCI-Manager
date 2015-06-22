/**
 * Utils
 */

'use strict';

var services = {};

/**
 * Define service
 */
exports.defineService = function (app, name, factory) {

  // store constructor into app
  app.set(name, function () {
    // make sure factory method is called only once
    if (!services[name]) {
      services[name] = factory();
    }
    return services[name];
  });

};

