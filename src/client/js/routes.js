/**
 * Routes
 */

'use strict';

app
  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('index', {
        url       : '/',
        views: {
          'content': {
            template: '-'
          }
        }
      })

      .state('setup', {
        url        : '/setup',
        views: {
          'content': {
            templateUrl: 'views/setup.html',
            controller : 'SetupController'
          }
        }
      })

    ;

  });
