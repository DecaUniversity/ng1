"use strict";


angular.module("app")
	.controller("GreetingController", ["$scope", function ($scope) {
		
		$scope.greeting = "Hola!";
		
	}]);


angular.module("app")
	.controller("DoubleController", ["$scope", function ($scope) {
		
		$scope.num = null;
		
		$scope.double = (value) => {
			
			const xx = 2;
			
			return value * xx;
			
		};
		
	}]);

angular.module("app")
	.controller("SpicyController", ["$scope", function ($scope) {
		
		$scope.spice = "very";
		$scope.customSpice = "wasabi";
		
		$scope.chiliSpicy = () => {
			
			$scope.spice = "chili";
			
		};
		
		$scope.jalapenoSpicy = () => {
			
			$scope.spice = "jalapeño";
			
		};
		
		$scope.setCustomSpice = (spice) => {
			
			$scope.spice = spice;
			
		};
		
	}]);
