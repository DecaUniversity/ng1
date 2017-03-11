"use strict";

const HeroDetailController = function () {
	
	const ctrl = this;
	
	ctrl.$onInit = function () {
		
		ctrl.location = ctrl.hero.location;
		
	};
	
	ctrl.delete = function () {
		
		ctrl.onDelete({hero: ctrl.hero});
		
	};
	
	ctrl.update = function (prop, value) {
		
		console.log(
			"HeroDetailController.update"
		);
		
		console.log(`params: prop=${prop}, value=${value}`);
		
		switch (value) {
			
			case "Seattle":
				ctrl.location = "Starbucks City";
				break;
			case "Las Vegas":
				ctrl.location = "Sin City";
				break;
			default:
				ctrl.location = value;
				break;
				
		}
		
		ctrl.onUpdate({
			hero: ctrl.hero,
			prop,
			value: ctrl.location
		});
		
	};
	
};

angular.module("main")
	.component("dhHeroDetail", {
		
		templateUrl: "components/hero_tree/heroDetail.html",
		controller: HeroDetailController,
		bindings: {
			hero: "<",
			onDelete: "&",
			onUpdate: "&"
		}
		
	});
