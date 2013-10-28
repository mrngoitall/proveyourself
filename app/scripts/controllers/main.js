'use strict';

angular.module('DeskAngularJSApp')
.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.email = localStorage.email || '';

  $scope.q1 = [
    {value: 'a',
      answer: 'Prevent pollution of global scope'},
    {value: 'b',
      answer: 'Encapsulation'},
    {value: 'c',
      answer: 'Private properties and methods'},
    {value: 'd',
      answer: 'Allow conditional use of ‘strict mode’'}
  ];

  $scope.register = function() {
    localStorage.email = $scope.email;
    $location.path('/quiz');
  };

  $scope.logout = function() {
    localStorage.removeItem('email');
    $scope.email = '';
    $location.path('/');
  };

}]);