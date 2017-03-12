"use strict";

angular.module("SimpleDirective")
	.directive("dhBetterCustomer", function () {
		
		return {
			
			restrict: "E",
			scope: {
				
				customerInfo: "=info"
				
			},
			templateUrl: "directives/better-customer.html"
			
		}
		
	});