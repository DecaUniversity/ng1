"use strict";

const HeroController = function () {
	
	// Controller details
	
};

angular.module("main")
	.component("hero", {
		bindings: {hero: "@"},
		controller: HeroController,
		templateUrl: "components/hero/hero.html"
		
	});
