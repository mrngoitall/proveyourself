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
  }));

  it('should have an object of answers in the scope', function () {
    expect(Object.keys(scope.answers).length).toBe(7);
  });

  it('should have a submitAnswers function', function() {
    expect(scope.submitAnswers).not.toThrow();
  });

});
