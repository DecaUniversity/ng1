"use strict";

angular.module("basic", []);

angular.module("basic")
	.filter("greet", function () {
		
		return function (name) {
			
			return `Hello, ${name}!`;
			
		};
		
	});