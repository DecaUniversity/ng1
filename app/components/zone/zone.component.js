"use strict";

const ZoneController = function () {
	
	// Controller details
	
};

angular.module("app")
	.component("zone", {
		bindings: {zoneLabel: "@"},
		controller: ZoneController,
		templateUrl: "/components/zone/zone.template.html",
		transclude: true
	});
