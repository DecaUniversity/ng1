"use strict";

const HeroDetailController = function () {
	
	const ctrl = this;
	
	// ctrl.location = "Default Location";
	// ctrl.location = ctrl.hero.location;
	
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
		
		// ctrl.hero.location = value;
		
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
		
		// ctrl.hero = {
		// 	name: ctrl.hero.name,
		// 	location: ctrl.location
		// };
		
		ctrl.onUpdate({
			hero: ctrl.hero,
			prop,
			value: ctrl.location
		});
		
	};
	
};

angular.module("app")
	.component("heroDetail", {
		
		templateUrl: "/components/hero_tree/heroDetail.html",
		controller: HeroDetailController,
		bindings: {
			hero: "<",
			onDelete: "&",
			onUpdate: "&"
		}
		
	});
