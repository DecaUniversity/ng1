"use strict";

angular.module("main").
	controller("DirectivesController", ["$scope", function ($scope) {
		
		$scope.drink = "";
		$scope.strips = 5;
		
		$scope.getStripsNumber = function () {
			
			return new Array($scope.strips);
			
		}
		
}]);