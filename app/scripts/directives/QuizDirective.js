'use strict';

angular.module('DeskAngularJSApp')
  .directive('answer', function () {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        answermodel: '@'
      },
      template: '<div class="radio">\
        <label>\
          <input type="radio" ng-model="userAnswers.a1" name="a1" value="{{ options.value }}">{{ options.answer }}\
        </label>\
      </div>',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the QuizDirective directive');
      }
    };
  });
