/**
 * Auth service
 * @ver 1.2
 */

'use strict';

app.factory('Auth', function ($window, $injector, $timeout, api_endpoint, $rootScope, $q) {

  var tokenKey = 'leanci_auth_token';
  var userKey = 'leanci_user';

  function getToken() {
    if ($window.localStorage[tokenKey]) {
      return $window.localStorage[tokenKey];
    } else if ($window.sessionStorage[tokenKey]) {
      return $window.sessionStorage[tokenKey];
    } else {
      return false;
    }
  }

  function setToken(token, keepLoggedIn) {
    if (token) {

      setToken(null);

      if (keepLoggedIn) {
        $window.localStorage[tokenKey] = token;
      } else {
        $window.sessionStorage[tokenKey] = token;
      }
    } else {
      delete $window.localStorage[tokenKey];
      delete $window.sessionStorage[tokenKey];
    }
  }

  function erase() {
    setToken(null);
    setUser(null);
  }

  function login(stateAfterLogin) {

    if (undefined === stateAfterLogin) {
      stateAfterLogin = $injector.get('$state').current.name;
    }

    $timeout(function () {
      $injector.get('$state').transitionTo('login', {
        redirectToState: stateAfterLogin
      });
    }, 0);
  }

  /**
   * Check for token and load user info from cache/server
   *
   * @param gotoLogin
   * @param stateAfterLogin
   * @returns {promise}
   */
  function check(
    gotoLogin /* go to login state if not authenticated */,
    stateAfterLogin /* state to go after login */) {

    var deferred = $q.defer();

    if ($rootScope.user) {

      deferred.resolve($rootScope.user);

    } else {

      var token = getToken();
      var user = null;

      try {
        user = getUser();
      } catch (e) {
        setUser(null);
      }

      if (!token) {

        erase();
        deferred.reject('User is not logged in');

        if (gotoLogin) {
          login(stateAfterLogin);
        }

      } else if (!user) {

        $injector.get('$http').get(api_endpoint + '/accounts/current')

          .then(function ok(e) {
            user = e.data;
            setUser(user);
            deferred.resolve();
          }, function err(e) {
            erase();
            deferred.reject();

            if (gotoLogin) {
              login(stateAfterLogin);
            }
          });

      } else {

        setUser(user);
        deferred.resolve();

      }

    }

    return deferred.promise;
  }

  function logout() {
    erase();
  }

  function setUser(user) {
    if (user) {
      $rootScope.user = user;
      $window.sessionStorage[userKey] = JSON.stringify(user);
    } else {
      delete $rootScope.user;
      delete $window.sessionStorage[userKey];
    }
  }

  function getUser() {
    if ($window.sessionStorage[userKey]) {
      return JSON.parse($window.sessionStorage[userKey]);
    } else {
      return false;
    }
  }

  return {
    getToken: getToken,
    setToken: setToken,
    erase: erase,
    login: login,
    check: check,
    logout: logout,
    setUser: setUser,
    getUser: getUser
  };
});
