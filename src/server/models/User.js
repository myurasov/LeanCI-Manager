/**
 * User model
 */

'use strict';

var Sequelize = require('Sequelize');
var bcrypt = require('bcrypt');

module.exports = function User(sequelize) {
  return sequelize.define('user', {

    // email
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,

      // trim, lowcase
      set: function (val) {
        this.setDataValue('email', val.toLowerCase().trim());
      },

      validate: {
        // email regex
        is: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i
      }
    },

    // password hash
    passwordHash: {
      type: Sequelize.STRING,
      allowNull: false
    }

  }, {
    setterMethods: {

      // generate salted hash
      // see: https://github.com/ncb000gt/node.bcrypt.js#sync
      password: function (val) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync('B4c0/\/', salt);
        this.setDataValue('passwordHash', hash);
      }

    }
  });
};
