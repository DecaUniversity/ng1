"use strict";

angular.module("main")
	.controller("MainController", ["$scope", function ($scope) {
		
		$scope.panes = [
			"topics/controllers/controllers-pane.html",
			"topics/services/services-pane.html",
			"topics/scopes/scopes-pane.html",
			"topics/directives/directives-pane.html",
			"topics/components/components-pane.html",
			"topics/animations/animations-pane.html"
		];
		
		$scope.directivePanes = [
			"topics/directives/partials/normalization.html",
			"topics/directives/partials/scoping.html",
			"topics/directives/partials/dom-manipulation.html",
			"topics/directives/partials/transclusion.html",
			"topics/directives/partials/event-listener.html"
		];
	
		$scope.name = "Caroline";
		
		$scope.mainHero = "Superman";
		
		$scope.hero1 = {
			name: "Batman",
			location: "Gotham"
		};
	
	}]);

