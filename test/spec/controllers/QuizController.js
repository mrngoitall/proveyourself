'use strict';

describe('Controller: QuizController', function () {

  // load the controller's module
  beforeEach(module('DeskAngularJSApp'));

  var QuizController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizController = $controller('QuizController', {
      $scope: scope
    });
    localStorage.clear();
  }));

  it('should have an object of answers in the scope', function () {
    expect(Object.keys(scope.answers).length).toBe(7);
  });

  it('should have arrays of possible answers to questions in the scope', function() {
    expect(scope.q1.length).toBe(4);
    expect(scope.q2.length).toBe(6);
    expect(scope.q3.length).toBe(3);
    expect(scope.q5.length).toBe(2);
    expect(scope.q6.length).toBe(3);
  });

  it('should have arrays of objects with value and answer keys', function() {
    var validator = function(array) {
      for (var i = 0; i < array.length; i++) {
        expect(Object.keys(array[i])).toEqual(['value','answer']);
      }
    };
    validator(scope.q1);
    validator(scope.q2);
    validator(scope.q3);
    validator(scope.q5);
    validator(scope.q6);
  });

  it('should have a submitAnswers function', function() {
    expect(scope.submitAnswers).not.toThrow();
  });

  it('should have a submitAnswers function that gives a score', function() {
    scope.userAnswers = {
      a1: 'a',
      a2: 'b',
      a3: 'a',
      a4a: '<ul>',
      a4b: '<li>',
      a5: 'b',
      a6: 'a'
    };
    scope.submitAnswers();

    expect(scope.score).toEqual(6);
  });

});
