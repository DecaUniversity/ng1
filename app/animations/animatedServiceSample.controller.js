"use strict";


angular.module("app")
	.controller("AnimatedServiceSampleController",
		["$scope", "notifyAnimated", function ($scope, notify) {
			
			$scope.ritual = {};
			$scope.showChantButtons = true;
			$scope.showImg = false;
			
			$scope.ritual = notify.rite;
			
			$scope.reset = function () {
				
				notify.reset();
				
				$scope.showChantButtons = true;
				$scope.showImg = false;
				
			};
			
			
			$scope.callNotify = function (msg) {
				
				notify.processMessage(msg);
				
				if ($scope.ritual.complete) {
					
					$scope.showChantButtons = false;
					$scope.showImg = true;
					
				}
				
			};
			
		}]);
