"use strict";

angular.module("directives").
	controller("DirectivesController", ["$scope", function ($scope) {
		
		$scope.drink = "";
		$scope.strips = 5;
		
		$scope.getStripsNumber = function () {
			
			return new Array($scope.strips);
			
		};
	
		$scope.painting = "topics/directives/assets/starry.jpg";
	
}]);