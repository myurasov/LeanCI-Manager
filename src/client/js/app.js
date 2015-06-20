/**
 * App bootstrapping
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

'use strict';

var app = angular
  .module('leanci-manager-client', ['ui.router'])

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

  }
);
