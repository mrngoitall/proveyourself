'use strict';

angular.module('DeskAngularJSApp')
.controller('QuizController', ['$scope', '$location', function ($scope, $location) {

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

  $scope.submitAnswers = function() {
    console.log($scope.userAnswers);
    if (localStorage.userAnswers === null) {
      localStorage.userAnswers = JSON.stringify($scope.userAnswers);
      // Grade the answers
      $scope.score = 0;
      for (var answer in $scope.answers) {
        var userAnswer = $scope.userAnswers[answer];
        if ((userAnswer && userAnswer.trim().toLowerCase()) === $scope.answers[answer]) {
          $scope.score++;
        }
      }
      localStorage.score = $scope.score;
      console.log($scope.score);
    }
  };

}]);