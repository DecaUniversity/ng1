"use strict";

angular.module("directives")
	.directive("dhInteractiveFrame", function () {

		return {

			restrict: "E",
			transclude: true,
			scope: {flip: "&onFlip"},
			templateUrl: "topics/directives/scripts/interactive-frame.html"

		};

	});
