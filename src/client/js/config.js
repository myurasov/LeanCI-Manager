/**
 * App configuration
 * @copyright 2015 Mikhail Yurasov <me@yurasov.me>
 */

'use strict';

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('yellow');
});
