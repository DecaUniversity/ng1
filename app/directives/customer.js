"use strict";

angular.module("SimpleDirective")
	.directive("dhCustomer", function () {
		
		return {
			
			template: `Name: {{customer.name}} Address: {{customer.address}}`
			
		}
		
	});
