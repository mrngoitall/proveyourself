'use strict';

describe('Controller: IndexController', function () {

  // load the controller's module
  beforeEach(module('DeskAngularJSApp'));

  var IndexController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexController = $controller('IndexController', {
      $scope: scope
    });
  }));

  it('should have a register function', function() {
    expect(scope.register).not.toThrow();
  });

  it('should have a logout function', function() {
    expect(scope.logout).not.toThrow();
  });
});
