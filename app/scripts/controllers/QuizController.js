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

  $scope.q2 = [
    {value: 'a',
      answer: '<div>+<span>'},
    {value: 'b',
      answer: '<tr>+<td>'},
    {value: 'c',
      answer: '<ul>+<li>'},
    {value: 'd',
      answer: '<p>+<br>'},
    {value: 'e',
      answer: 'none of these'},
    {value: 'f',
      answer: 'all of these'}
  ];

  $scope.q3 = [
    {value: 'a',
      answer: 'fn.apply(this, stringsArray)'},
    {value: 'b',
      answer: 'fn.call(this, stringsArray)'},
    {value: 'c',
      answer: 'fn.bind(this, stringsArray)'}
  ];

  $scope.q5 = [
    {value: 'a',
      answer: 'getElementById("outer").children[0]'},
    {value: 'b',
      answer: 'getElementsByClassName("inner")[0]'}
  ];

  $scope.q6 = [
    {value: 'a',
      answer: '1'},
    {value: 'b',
      answer: '2'},
    {value: 'c',
      answer: '3'}
  ];

  $scope.answers = {
    a1: 'd',
    a2: 'b',
    a3: 'a',
    a4a: '<ul>',
    a4b: '<li>',
    a5: 'b',
    a6: 'a'
  };

  $scope.submitAnswers = function() {
    if (!localStorage.userAnswers) {
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
    }
  };

}]);