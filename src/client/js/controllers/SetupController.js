/**
 * Setup contyroller
 */

'use strict';

app.controller('SetupController', function ($scope, $http, $controller, api_endpoint) {

  // alerts
  $controller('AlertsTrait', {$scope: $scope});

  initScope();

  /**
   * Initialize scope
   */
  function initScope() {
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
  }

  /**
   * Submit
   */
  $scope.submit = function () {
    $scope.working++;
    $http.post(api_endpoint + '/users',{})
      .then(function ok() {

      }, function err(e) {
        $scope.setError(e.data.message);
      })
      .finally(function () {
        $scope.working--;
      });
  };
});
