'use strict';

angular.module('DeskAngularJSApp')
  .directive('answer', function () {
    return {
      restrict: 'E',
      template: '<div class="radio" ng-class="{\
        \'bs-callout-success\': score > -1 && options.value == answers[model],\
        \'bs-callout-danger\': score > -1 && options.value == userAnswers[model] && options.value != answers[model]\
      }">\
        <label>\
          <input type="radio" class="control-label" ng-model="userAnswers[model]" name="{{model}}" value="{{ options.value }}" ng-disabled="score > -1">{{ options.answer }}\
        </label>\
      </div>',
      link: function postLink(scope, element, attrs) {
        scope.model = attrs.answermodel;
        //element.text('this is the QuizDirective directive');
      }
    };
  });
