"use strict";

angular.module("SimpleDirective")
	.controller("SimpleDirectiveController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Naomi",
			address: "1600 Amphitheatre"
			
		};
		
		$scope.bey = {
			
			name: "Queen Bey",
			address: "Lose Blvd"
			
		};
		
		$scope.key = {
			
			name: "Queen Key",
			address: "My Blvd"
			
		};
		
		$scope.mey = {
			
			name: "Queen Mey",
			address: "Breath Blvd"
			
		};
		
		$scope.format = "hh:mm:ss"
		
	}]);


angular.module("SimpleDirective")
	.controller("BeyonceController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Beyoncé Knowles",
			address: "Destiny's Child Hwy"
			
		}
		
	}]);

angular.module("SimpleDirective")
	.controller("KellyController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Kelly Rowland",
			address: "Destiny's Child Blvd"
			
		}
		
	}]);

angular.module("SimpleDirective")
	.controller("MichelleController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Michelle Williams",
			address: "Destiny's Child Lane"
			
		}
		
	}]);
