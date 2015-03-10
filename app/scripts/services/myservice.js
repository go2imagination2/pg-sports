'use strict';

/**
 * @ngdoc service
 * @name yoApp.myService
 * @description
 * # myService
 * Service in the yoApp.
 */
angular.module('yoApp')
  .service('myService', ['$http', '$q', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	doLogin: function(username, password) {
    		var deferred = $q.defer();

    		$http({method: 'POST', url: 'https://api.mydomain.com/login'})
    			.success(function(data, status, headers, config){
    				deferred.resolve(data);
    			})
    			.error(function(data, status, headers, config){
    				deferred.reject(data);
    			});
    		
    		return deferred.promise;
    	}
    };
  }]);
