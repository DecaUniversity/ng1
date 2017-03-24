"use strict";

const HeroController = function () {
	
	// Controller details
	
};

angular.module("main")
	.component("dhHero", {
		bindings: {hero: "@"},
		controller: HeroController,
		templateUrl: "topics/components/hero/hero.html"
		
	});
