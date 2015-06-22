/**
 * User model
 */

'use strict';

var Sequelize = require('Sequelize');

module.exports = function User(sequelize) {
  return sequelize.define('user', {

    email: {
      type: Sequelize.STRING,
      //allowNull: false,
      //unique: true,

      // trim, lowcase
      set: function (val) {
        this.setDataValue('email', val.toLowerCase().trim());
      },

      validate: {
        // email regex
        is: '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i'
      }
    },

    passwordHash: {
      type: Sequelize.STRING,
      //allowNull: false
    }

  }, {
    setterMethods: {

      password: function (val) {
        console.log('setPassword', val);
      }

    }
  });
};
