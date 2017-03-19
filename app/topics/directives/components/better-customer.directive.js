"use strict";

angular.module("directives")
	.directive("dhBetterCustomer", function () {
		
		return {
			
			restrict: "E",
			scope: {
				
				customerInfo: "=info"
				
			},
			templateUrl: "topics/directives/components/better-customer.html"
			
		}
		
	});