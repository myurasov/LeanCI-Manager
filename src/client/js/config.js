/**
 * App configuration
 */

'use strict';

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('yellow');
});
