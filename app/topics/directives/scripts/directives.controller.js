"use strict";

angular.module("directives")
	.controller("DirectivesController", ["$scope", function ($scope) {
		
		$scope.drink = "";
		$scope.strips = 5;
		
		$scope.getStripsNumber = function () {
			
			return new Array($scope.strips);
			
		};
	
		$scope.painting = "topics/directives/assets/starry.jpg";
		$scope.painting2 = "topics/directives/assets/sunday.jpg";
		$scope.painting3 = "topics/directives/assets/scream.jpg";
	
		$scope.paintingAnimated = "topics/directives/assets/night.gif";
		$scope.painterAnimated = "topics/directives/assets/van.gif";
		
		let flip = false;
		
		$scope.source = $scope.paintingAnimated;
		
		$scope.flipflop = function () {
			
			if (flip) {
				
				$scope.source = $scope.paintingAnimated;
				flip = false;
				
			} else {
				
				$scope.source = $scope.painterAnimated;
				flip = true;
				
			}
		
		};
	
	}]);
