/**
 * App configuration
 */

'use strict';

// angular material theming
app.config(function ($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('yellow');

  $mdIconProvider
    .defaultIconSet("vendor /assets/svg/avatars.svg", 128)
    .icon("menu", "./assets/svg/menu.svg", 24)
    .icon("share", "./assets/svg/share.svg", 24)
    .icon("google_plus", "./assets/svg/google_plus.svg", 512)
    .icon("hangouts", "./assets/svg/hangouts.svg", 512)
    .icon("twitter", "./assets/svg/twitter.svg", 512)1
    .icon("phone", "./assets/svg/phone.svg", 512);

});

// api endpoint
app.constant('api_endpoint', '//localhost:12345/api');
