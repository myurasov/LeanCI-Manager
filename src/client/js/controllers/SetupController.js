/**
 * Setup contyroller
 */

'use strict';

app.controller('SetupController', function ($scope, $http) {

  // # of async processes working
  $scope.working = 0;

  $scope.input = {
    user: {
      //email: 'me@yurasov.me',
      //password: 'passw123'
    },
    //passwordConfirmation: 'passw123'
  };


});
