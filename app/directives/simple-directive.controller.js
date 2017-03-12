"use strict";

angular.module("SimpleDirective")
	.controller("SimpleDirectiveController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Naomi",
			address: "1600 Amphitheatre"
			
		}
		
	}]);
