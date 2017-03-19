"use strict";

angular.module("directives")
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


angular.module("directives")
	.controller("BeyonceController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Beyoncé Knowles",
			address: "Destiny's Child Hwy"
			
		}
		
	}]);

angular.module("directives")
	.controller("KellyController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Kelly Rowland",
			address: "Destiny's Child Blvd"
			
		}
		
	}]);

angular.module("directives")
	.controller("MichelleController", ["$scope", function ($scope) {
		
		$scope.customer = {
			
			name: "Michelle Williams",
			address: "Destiny's Child Lane"
			
		}
		
	}]);
