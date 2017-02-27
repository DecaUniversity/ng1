"use strict";


angular.module("app")
	.controller("AnimatedServiceSampleController",
		["$scope", "notifyAnimated", "$timeout", function ($scope, notify, $timeout) {
			
			$scope.ritual = {};
			$scope.showChantButtons = true;
			$scope.showChants = true;
			$scope.showImg = false;
			$scope.ritualDone = false;
			
			const imgVanishDelay = 2000;
			const imgShowDelay = 1000;
			
			$scope.ritual = notify.rite;
			
			console.log($scope.ritual);
			
			$scope.reset = function () {
				
				notify.reset();
				
				console.log(`Controller rite: ${JSON.stringify($scope.ritual)}`);
				
				$scope.showChantButtons = true;
				$scope.showImg = false;
			};
			
			
			$scope.callNotify = function (msg) {
				
				notify.processMessage(msg);
				
				console.log(`Controller rite: ${JSON.stringify($scope.ritual)}`);
				
				if ($scope.ritual.complete) {
					
					console.log(`Ritual has been completed.`);
					
					$scope.showChantButtons = false;
					$scope.showImg = true;
					
				}
				
			};
			
		}]);