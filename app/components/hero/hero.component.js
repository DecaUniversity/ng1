"use strict";

const HeroDetailController = function () {
	
	// Controller details
	
};

angular.module("app")
	.component("hero", {
		bindings: {hero: "@"},
		controller: HeroDetailController,
		templateUrl: "/components/hero/hero.html"
		
	});
