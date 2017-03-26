"use strict";

angular.module("scopeExample")
	.controller("EventController", ["$scope", function ($scope) {
		
		$scope.count = 0;
		$scope.$on("MyEvent", function () {
			
			$scope.count += 1;
			
		});
		
	}]);
