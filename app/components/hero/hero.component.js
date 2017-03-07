"use strict";

const HeroController = function () {
	
	// Controller details
	
};

angular.module("app")
	.component("hero", {
		bindings: {hero: "@"},
		controller: HeroController,
		templateUrl: "components/hero/hero.html"
		
	});
