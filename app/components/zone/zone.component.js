"use strict";

const ZoneController = function () {
	
	// Controller details
	
};

angular.module("main")
	.component("zone", {
		bindings: {zoneLabel: "@"},
		controller: ZoneController,
		templateUrl: "components/zone/zone.template.html",
		transclude: true
	});
