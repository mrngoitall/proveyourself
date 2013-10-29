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
        controller: 'IndexController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'IndexController'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
