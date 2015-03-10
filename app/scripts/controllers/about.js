'use strict';
/* global cordova, alert */


/**
 * @ngdoc function
 * @name yoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('AboutCtrl', function ($scope) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.scanQR = function () {
    	alert(cordova.plugins.barcodeScanner);
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert('We got a barcode\n' +
            'Result: ' + result.text + '\n' +
            'Format: ' + result.format + '\n' +
            'Cancelled: ' + result.cancelled);
        }, 
        function (error) {
          alert('Scanning failed: ' + error);
        }
      );
    };

  });
