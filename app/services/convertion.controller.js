"use strict";

angular.module("app").controller("ConversionController",
	["$scope", "Dec2Bin", function ($scope, converter) {
	
		$scope.decimalNumber = "10";
		
		$scope.binaryNumber = converter.dec2bin($scope.decimalNumber);
		
		$scope.$watch("decimalNumber", function (newValue, oldValue) {
			
			$scope.binaryNumber = converter.dec2bin(newValue);
			
		});
		
	}]);
