"use strict";

angular.module("scopeExample")
	.controller("ScopeExampleController", ["$scope", function ($scope) {
		
		$scope.devWork = true;
		
		$scope.autoplay = true;
		
		$scope.videoChosen = false;
		
		$scope.defaultVideo = {
			code: "",
			start: 0
		};
		
		$scope.videoLinks = new Map();
		
		$scope.videoLinks.set("adele", {
			code: "YQHsXMglC9A",
			start: 80
		});
		
		$scope.videoLinks.set("lionel", {
			code: "AiC7ZX5K9L4",
			start: 39
		});
		
		$scope.videoLinks.set("dragonette", {
			code: "LnET4RKXx5k",
			start: 29
		});
		
		$scope.getVideoLink = function () {
			
			return "https://www.youtube.com/embed/" +
				`${$scope.defaultVideo.code}?` +
				`start=${$scope.defaultVideo.start}` +
				`&rel=0&autoplay=${$scope.autoplay}`;
			
		};
		
		$scope.setVideo = function (singer) {
			
			$scope.defaultVideo.code = $scope.videoLinks.get(singer).code;
			$scope.defaultVideo.start = $scope.videoLinks.get(singer).start;
			
			$scope.getVideoLink();
			
			$scope.videoChosen = true;
			
		};
		
		/**
		 * Hello, it's me
		 I was wondering if after all these bears you'd like to pee
		 To let go of everything
		 They say that time's supposed to heal ya
		 But I ain't done much healing
		 */
		
	}]);