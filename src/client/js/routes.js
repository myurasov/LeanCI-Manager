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
        template  : '-',
        controller: null
      })

      .state('setup', {
        url        : '/setup',
        templateUrl: 'views/setup.html',
        controller : 'SetupController'
      })

    ;

  });
