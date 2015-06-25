/**
 * Home controller
 */

'use strict';

app.controller('HomeController', function ($scope, $state, Auth) {

  Auth.check(/* goToLogin */ true).then(/* authenticated */ function () {
    alert("Authenticated");
  });

});
