/**
 * Utils
 */

'use strict';

var services = {};

exports.defineService = function (app, name, factory) {
  app.set(name, function () {
    if (!services[name]) {
      services[name] = factory();
    }
    return services[name];
  });
};

