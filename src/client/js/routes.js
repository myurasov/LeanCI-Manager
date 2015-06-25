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
          'content': {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
          }
        }
      })

      .state('setup', {
        url  : '/setup',
        views: {
          'content': {
            templateUrl: 'views/setup.html',
            controller : 'SetupController'
          }
        }
      })

      .state('login', {
        url  : '/login',
        views: {
          'content': {
            templateUrl: 'views/login.html',
            controller : 'LoginController'
          }
        }
      })
    ;

  });
