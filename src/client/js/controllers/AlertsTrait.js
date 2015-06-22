/**
 * Alerts trait
 */

'use strict';

app.controller('AlertsTrait', function ($scope) {

  $scope.addSuccess = function (msg) {
    $scope.alerts = $scope.alerts || [];
    $scope.alerts.push({
      message: msg,
      type: 'success'
    });
  };

  $scope.addError = function (msg) {
    $scope.alerts = $scope.alerts || [];
    $scope.alerts.push({
      message: msg,
      type: 'error'
    });
  };

  $scope.clearAlerts = function () {
    delete $scope.alerts;
  };

  $scope.closeAlert = function (index) {
    $scope.alerts.splice(index, 1);

    if ($scope.alerts.length === 0) {
      delete $scope.alerts;
    }
  };

  $scope.setError = function (msg) {
    $scope.clearAlerts();
    $scope.addError(msg);
  };

  $scope.setSuccess = function (msg) {
    $scope.clearAlerts();
    $scope.addSuccess(msg);
  };

});
