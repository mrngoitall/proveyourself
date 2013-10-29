'use strict';

angular.module('DeskAngularJSApp')
.controller('QuizController', ['$scope', '$location', function ($scope, $location) {

  $scope.email = localStorage.email || '';
  $scope.userAnswers = (localStorage.userAnswers && JSON.parse(localStorage.userAnswers)) || {};
  $scope.score = localStorage.score || -1;

  if ($location.path() === '/quiz' && !$scope.email.length) {
    $location.path('/');
  }

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
    a1: 'd',
    a2: 'b',
    a3: 'a',
    a4a: 'answer1',
    a4b: 'answer2',
    a5: 'b',
    a6: 'a'
  };

  $scope.submitAnswers = function() {
    console.log($scope.userAnswers);
    if (!localStorage.userAnswers) {
      localStorage.userAnswers = JSON.stringify($scope.userAnswers);
      // Grade the answers
      $scope.score = 0;
      for (var answer in $scope.answers) {
        var userAnswer = $scope.userAnswers[answer];
        if ((userAnswer && userAnswer.toLowerCase()) === $scope.answers[answer]) {
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