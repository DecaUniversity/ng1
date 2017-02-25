"use strict";

angular.module("app")
	.controller("MainController", ["$scope", function ($scope) {
	
		$scope.name = "Caroline";
		
		$scope.mainHero = "Superman";
		
		$scope.hero1 = {
			name: "Batman",
			location: "Gotham"
		};
	
	}]);

