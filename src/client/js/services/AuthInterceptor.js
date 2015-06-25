/**
 * HTTP interceptor to handle autorization
 */

'use strict';

app.factory('AuthInterceptor', function ($q, $window, Auth) {
  return {

    request : function (config) {

      // add Authorization header

      config.headers = config.headers || {};
      var token = Auth.getToken();

      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    },

    responseError: function (response) {

      if (response.status === 401 /* Unauthorized, re-login required */) {
        Auth.erase();
        Auth.login();
      }

      return $q.reject(response);
    }

  };
});
