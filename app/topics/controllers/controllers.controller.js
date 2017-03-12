"use strict";


angular.module("main")
	.controller("GreetingController", ["$scope", function ($scope) {

		$scope.greeting = "Hola!";

	}]);


angular.module("main")
	.controller("DoubleController", ["$scope", function ($scope) {

		$scope.num = null;

		$scope.double = (value) => {

			const xx = 2;

			return value * xx;

		};

	}]);

angular.module("main")
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
