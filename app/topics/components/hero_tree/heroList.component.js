"use strict";

const HeroListController = function ($scope, $element, $attrs) {
	
	$scope.list = [
		{
			name: "Superman",
			location: ""
		},
		{
			name: "Batman",
			location: "Wayne Manor"
		},
		{
			name: "Aquaman",
			location: "Bahama Breeze"
		},
		{
			name: "Green Lantern",
			location: "Green Peace HQ"
		}
	];
	
	/**
	 * Updates a hero info from the list
	 * @param hero The hero to update
	 * @param prop The property of the hero to update
	 * @param value The value to assigned to the property to update
	 * @returns
	 */
	$scope.updateHero = function (hero, prop, value) {
		
		hero[prop] = value;
		
	};
	
	/**
	 * Delete a hero from the list.
	 * @param hero The hero to delete from the list
	 * @returns
	 */
	$scope.deleteHero = function (hero) {
		
		const index = $scope.list.indexOf(hero);
		
		if (index >= 0) {
			
			$scope.list.splice(index, 1);
			
		}
		
	};
	
};

angular.module("main")
	.component("dhHeroList", {
		templateUrl: "topics/components/hero_tree/heroList.html",
		controller: HeroListController
	});
