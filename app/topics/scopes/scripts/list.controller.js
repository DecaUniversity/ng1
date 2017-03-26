"use strict";

angular.module("scopeExample")
	.controller("ListController", ["$scope", function ($scope) {
		
		$scope.names = ["Igor", "Misko", "Vojta"];
		
	}]);
