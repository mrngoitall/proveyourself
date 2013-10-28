'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('DeskAngularJSApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have an object of answers in the scope', function () {
    expect(Object.keys(scope.answers).length).toBe(7);
  });
});
