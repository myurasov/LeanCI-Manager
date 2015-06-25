/**
 * App bootstrapping
 */

'use strict';

var app = angular.module('leanci-manager-client', ['ui.router', 'ngMaterial']);

// auth interceptor
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
