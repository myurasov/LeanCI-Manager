/**
 * App configuration
 */

'use strict';

// angular material theming
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('yellow');
});

// api endpoint
app.constant('api_endpoint', '//localhost:12345/api');
