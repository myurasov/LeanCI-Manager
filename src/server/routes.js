/**
 * Routing
 */

'use strict';

module.exports = function (app) {

  app.use('/', require('./routes/index'));
  app.use('/api/settings', require('./routes/api/settings'));
  app.use('/api/users', require('./routes/api/users'));

};
