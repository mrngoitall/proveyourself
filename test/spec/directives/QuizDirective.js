'use strict';

describe('Directive: QuizDirective', function () {

  // load the directive's module
  beforeEach(module('DeskAngularJSApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should display a radio input with answer directive', inject(function ($compile) {
    element = angular.element('<answer></answer>');
    element = $compile(element)(scope);
    expect(element.html()).toContain('<input type="radio"');
  }));
});
