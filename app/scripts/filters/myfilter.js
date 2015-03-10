'use strict';

/**
 * @ngdoc filter
 * @name yoApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the yoApp.
 */
angular.module('yoApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
