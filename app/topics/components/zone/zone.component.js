"use strict";

const ZoneController = function () {
	
	// Controller details
	
};

angular.module("main")
	.component("dhZone", {
		bindings: {zoneLabel: "@"},
		controller: ZoneController,
		templateUrl: "topics/components/zone/zone.template.html",
		transclude: true
	});
