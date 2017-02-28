/* eslint eqeqeq: 0 */

"use strict";

angular.module("app", ["ngAnimate"])
	// Services can also be registered via the $provide services
	// inside of a module config function.
	.config(["$provide", function ($provide) {
		
		$provide.factory("Dec2Bin", function () {
			
			// Factory function body that constructs the new service instance.
			// This service converts a decimal number to binary
			
			// Verify that number is an integer number
			// From: http://stackoverflow.com/a/14794066/6051978
			const isInt = function (value) {
				
				return !isNaN(value) &&
					// This takes care of filtering out floating numbers
					parseInt(Number(value), 10) == value &&
					// ensure that the number is decimal
					!isNaN(parseInt(value, 10));
				
			};
			
			const convertDecToBin = function (decNum) {
				
				if (!isInt(decNum)) {
					
					return;
					
				}
				
				if (decNum < 0) {
					
					return;
					
				}
				
				let reduced = decNum;
				const binDigits = [];
				let binString = "";
				
				while (reduced !== 0) {
					
					binDigits.push(reduced % 2);
					reduced = Math.floor(reduced / 2);
					
				}
				
				for (let elem = binDigits.length - 1; elem > -1; elem--) {
					
					binString += binDigits[elem];
					
				}
				
				return binString;
				
			};
			
			return {dec2bin: convertDecToBin};
			
		});
		
	}]);
