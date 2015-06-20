/**
 * App bootstrapping
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

'use strict';

angular
  .module('leanci-manager-client', ['ui.router'])

  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('index', {
        url  : '/',
        views: {
          content: {
            template  : '-',
            controller: function () {
            }
          }
        }
      });

  }
);
