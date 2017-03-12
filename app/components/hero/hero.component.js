"use strict";

const HeroController = function () {
	
	// Controller details
	
};

angular.module("main")
	.component("dhHero", {
		bindings: {hero: "@"},
		controller: HeroController,
		templateUrl: "components/hero/hero.html"
		
	});
