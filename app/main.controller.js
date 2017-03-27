"use strict";

angular.module("main")
	.controller("MainController", ["$scope", function ($scope) {
		
		$scope.panes = [
			"topics/controllers/controllers-pane.html",
			"topics/services/services-pane.html",
			"topics/scopes/scopes-pane.html",
			"topics/directives/directives-pane.html",
			"topics/components/components-pane.html",
			"topics/animations/animations-pane.html",
			"topics/modules/modules-pane.html"
		];
		
		$scope.directivePanes = [
			"topics/directives/partials/normalization.html",
			"topics/directives/partials/scoping.html",
			"topics/directives/partials/dom-manipulation.html",
			"topics/directives/partials/transclusion.html",
			"topics/directives/partials/event-listener.html"
		];
		
		$scope.scopePanes = [
			"topics/scopes/partials/definition.html",
			"topics/scopes/partials/data-model.html",
			"topics/scopes/partials/hierarchies.html",
			"topics/scopes/partials/dom-retrieval.html",
			"topics/scopes/partials/event-propagation.html"
		];
		
		$scope.modulePanes = [
			"topics/modules/partials/basics.html",
			"topics/modules/partials/recommended-setup.html",
			"topics/modules/partials/loading-deps.html",
			"topics/modules/partials/configuration.html"
		];
		
		$scope.name = "Caroline";
		
		$scope.mainHero = "Superman";
		
		$scope.hero1 = {
			name: "Batman",
			location: "Gotham"
		};
	
	}]);

