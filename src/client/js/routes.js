/**
 * Routes
 */

'use strict';

app
  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url  : '/',
        views: {
          '': {
            templateUrl: 'views/layout.html',
            controller: 'HomeController'
          }
        }
      })

      .state('setup', {
        url  : '/setup',
        views: {
          '': {
            templateUrl: 'views/setup.html',
            controller : 'SetupController'
          }
        }
      })

      .state('login', {
        url  : '/login',
        views: {
          '': {
            templateUrl: 'views/login.html',
            controller : 'LoginController'
          }
        }
      })
    ;

  });
