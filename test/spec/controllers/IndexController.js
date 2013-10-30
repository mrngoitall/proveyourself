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

  it('should have a register function that records email in scope to localStorage', function() {
    scope.registration = {};
    scope.registration.$valid = true;
    scope.email = 'user@test.com';
    scope.register();
    expect(localStorage.email).toEqual('user@test.com');
  });

  it('should have a logout function', function() {
    expect(scope.logout).not.toThrow();
  });

  it('should have a logout function that clears email from localStorage and scope', function() {
    scope.registration = {};
    scope.registration.$valid = true;
    scope.email = 'user@test.com';
    scope.register();
    expect(localStorage.email).toEqual('user@test.com');

    scope.logout();
    expect(localStorage.email).toBe(undefined);
    expect(scope.email).toBe('');
  });
});
