"use strict";

const ZoneExampleController = function () {
	
	// Controller logic
	
	const ctrl = this;
	
	ctrl.mainHero = "Superman";
	
	ctrl.hero1 = {
		name: "Batman",
		location: "Gotham"
	};
	
};


angular.module("main")
	.component("zoneExample", {
		
		templateUrl: "components/zone/zone-example.html",
		controller: ZoneExampleController,
		bindings: {},
		transclude: true
		
	});
