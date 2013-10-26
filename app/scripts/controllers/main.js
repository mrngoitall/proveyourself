'use strict';

angular.module('DeskAngularJSApp')
.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.email = localStorage.email || '';

  $scope.register = function() {
    localStorage.email = $scope.email;
    $location.path('/quiz');
  };

}]);