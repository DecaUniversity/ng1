"use strict";

angular.module("directives")
	.directive("dhScopedFrame", function () {
		
		return {
			
			restrict: "E",
			transclude: true,
			scope: {},
			templateUrl: "topics/directives/scripts/scoped-frame.html",
			link: function (scope) {
				
				scope.painting = "topics/directives/assets/monalisa.jpg";
				
			}
			
		}
		
	});

angular.module("directives")
	.directive("dhUnscopedFrame", function () {
		
		return {
			
			restrict: "E",
			transclude: true,
			templateUrl: "topics/directives/scripts/scoped-frame.html",
			link: function (scope) {
				
				scope.painting = "topics/directives/assets/monalisa.jpg";
				
			}
		}
		
	});