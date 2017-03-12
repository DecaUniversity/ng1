"use strict";

angular.module("main")
	.controller("MainController", ["$scope", function ($scope) {
		
		$scope.panes = [
			"partials/controllers-pane.html",
			"partials/services-pane.html",
			"partials/scopes-pane.html",
			"partials/directives-pane.html",
			"partials/components-pane.html",
			"partials/animations-pane.html"
		];
	
		$scope.name = "Caroline";
		
		$scope.mainHero = "Superman";
		
		$scope.hero1 = {
			name: "Batman",
			location: "Gotham"
		};
	
	}]);

