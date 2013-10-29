'use strict';

angular.module('DeskAngularJSApp')
  .directive('answer', function () {
    return {
      restrict: 'E',
      template: '<div class="radio" ng-class="{\
        \'bs-callout\': score > -1 && (options.value == answers.a1 || options.value == userAnswers.a1),\
        \'bs-callout-success\': score > -1 && options.value == answers.a1,\
        \'bs-callout-danger\': score > -1 && options.value == userAnswers.a1 && options.value != answers.a1\
      }">\
        <label>\
          <input type="radio" class="control-label" ng-model="userAnswers.a1" name="a1" value="{{ options.value }}" ng-disabled="score > -1">{{ options.answer }}\
        </label>\
      </div>',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the QuizDirective directive');
      }
    };
  });
