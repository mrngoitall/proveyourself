'use strict';

angular.module('DeskAngularJSApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'IndexCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'IndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
