'use strict';

angular.module('DeskAngularJSApp')
.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.email = localStorage.email || '';
  $scope.userAnswers = (localStorage.userAnswers && JSON.parse(localStorage.userAnswers)) || {};
  $scope.score = localStorage.score || -1;

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

  // TODO: Determine real answers!
  $scope.answers = {
    a1: 'a',
    a2: 'b',
    a3: 'c',
    a4a: 'answer1',
    a4b: 'answer2',
    a5: 'a',
    a6: 'b'
  };

  $scope.register = function() {
    localStorage.email = $scope.email;
    $location.path('/quiz');
  };

  $scope.submitAnswers = function() {
    console.log($scope.userAnswers);
    if (localStorage.userAnswers === null) {
      localStorage.userAnswers = JSON.stringify($scope.userAnswers);
      // Grade the answers
      $scope.score = 0;
      for (var answer in $scope.answers) {
        if (($scope.userAnswers[answer] && $scope.userAnswers[answer].toLowerCase()) === $scope.answers[answer]) {
          $scope.score++;
        }
      }
      localStorage.score = $scope.score;
      console.log($scope.score);
    }
  };

  $scope.logout = function() {
    localStorage.clear();
    $scope.email = '';
    $location.path('/');
  };

}]);