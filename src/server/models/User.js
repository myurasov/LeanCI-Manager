/**
 * User model
 */

'use strict';

var Sequelize = require('Sequelize');

module.exports = function User(sequelize) {
  return sequelize.define('user', {
    email: {
      type: Sequelize.STRING
    }
  });
};
