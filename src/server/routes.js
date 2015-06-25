/**
 * Routing
 */

'use strict';

module.exports = function (app) {

  app.use('/', require('./routes/index'));
  app.use('/api/users', require('./routes/api/users'));

};
