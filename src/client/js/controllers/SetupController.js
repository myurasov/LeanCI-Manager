/**
 * Setup contyroller
 */

'use strict';

app.controller('SetupController', function ($scope, $http) {

  // # of async processes working
  $scope.working = 0;

  // user input
  $scope.input = {
    user: {
      email: 'me@yurasov.me',
      password: 'passw123'
    },
    passwordConfirmation: 'passw123'
  };

  $scope.submit = function () {
    $scope.working++;
    $http.post('http://localhost:12345/api/users',{})
      .finally(function () {
        $scope.working--;
      });
  };
});
