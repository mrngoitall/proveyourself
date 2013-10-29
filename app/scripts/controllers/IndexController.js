'use strict';

angular.module('DeskAngularJSApp')
.controller('IndexController', ['$scope','$location', function ($scope, $location) {

  $scope.email = localStorage.email || '';

  if ($location.path() === '/register' && $scope.email.length) {
    $location.path('/quiz');
  }

  $scope.register = function() {
    if ($scope.registration.$valid) {
      localStorage.email = $scope.email;
      $location.path('/quiz');
    }
  };

  $scope.logout = function() {
    localStorage.clear();
    $scope.email = '';
    $location.path('/');
  };

}]);
