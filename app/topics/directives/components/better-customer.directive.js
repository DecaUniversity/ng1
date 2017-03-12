"use strict";

angular.module("SimpleDirective")
	.directive("dhBetterCustomer", function () {
		
		return {
			
			restrict: "E",
			scope: {
				
				customerInfo: "=info"
				
			},
			templateUrl: "topics/directives/components/better-customer.html"
			
		}
		
	});